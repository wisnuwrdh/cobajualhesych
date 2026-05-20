// api/sync.js — Vercel Serverless Function
// Cloud Sync untuk Hesych — upload & download encrypted vault
//
// Required env vars:
//   GUMROAD_PRODUCT_ID        — Product ID dari Gumroad dashboard
//   SUPABASE_URL              — Supabase project URL
//   SUPABASE_SERVICE_ROLE_KEY — Supabase service role key
//   UPSTASH_REDIS_REST_URL    — Upstash Redis REST URL
//   UPSTASH_REDIS_REST_TOKEN  — Upstash Redis REST token

import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Upstash Redis rate limiter — persistent across all Vercel instances
// max 20 requests per IP per 15 minutes (sliding window)
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(20, '15 m'),
  prefix: 'rl:sync',
});

// ── Supabase helper ───────────────────────────────────────────────────────
function getSupabase() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const headers = {
    'Content-Type': 'application/json',
    'apikey': key,
    'Authorization': `Bearer ${key}`,
    'Prefer': 'return=representation',
  };
  return { url, headers };
}

async function getVault(licenseKey) {
  const { url, headers } = getSupabase();
  const res = await fetch(
    `${url}/rest/v1/vault_sync?license_key=eq.${encodeURIComponent(licenseKey)}&select=encrypted_vault,updated_at,last_device_id`,
    { headers }
  );
  const data = await res.json();
  return data[0] || null;
}

async function upsertVault(licenseKey, encryptedVault, deviceId) {
  const { url, headers } = getSupabase();
  await fetch(`${url}/rest/v1/vault_sync`, {
    method: 'POST',
    headers: { ...headers, 'Prefer': 'resolution=merge-duplicates' },
    body: JSON.stringify({
      license_key: licenseKey,
      encrypted_vault: encryptedVault,
      updated_at: new Date().toISOString(),
      last_device_id: deviceId, // OpsiB: track which device uploaded last
    }),
  });
}

// ── Verify license is registered (device must be activated) ──────────────
async function isDeviceRegistered(licenseKey, deviceId) {
  const { url, headers } = getSupabase();
  const res = await fetch(
    `${url}/rest/v1/license_devices?license_key=eq.${encodeURIComponent(licenseKey)}&device_id=eq.${encodeURIComponent(deviceId)}&select=device_id`,
    { headers }
  );
  const data = await res.json();
  return data.length > 0;
}

// ── Main handler ──────────────────────────────────────────────────────────
export default async function handler(req, res) {
  // M1 FIX: reject requests missing Origin or from non-hesych.com origins
  const origin = req.headers['origin'];
  const allowedOrigins = ['https://hesych.com', 'https://www.hesych.com'];
  if (!origin || !allowedOrigins.includes(origin)) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting via Upstash Redis (persistent across all serverless instances)
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
  const { success } = await ratelimit.limit(ip);
  if (!success) {
    return res.status(429).json({ error: 'Too many requests. Try again later.' });
  }

  const { license, deviceId, action, encryptedVault, localUpdatedAt } = req.body;

  if (!license || !deviceId) {
    return res.status(400).json({ error: 'Missing license or deviceId' });
  }

  const key = license.trim();

  // M4 FIX: validate formats before hitting Supabase
  const KEY_RE = /^[A-Za-z0-9\-]{4,64}$/;
  if (!KEY_RE.test(key)) return res.status(400).json({ error: 'Invalid license format' });
  const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (!UUID_RE.test(deviceId)) return res.status(400).json({ error: 'Invalid deviceId format' });
  // SECURITY NOTE: Configure Supabase RLS policies for defense-in-depth:
  // vault_sync + license_devices: ENABLE RLS with policy license_key = auth.uid() or
  // a custom claim. Until RLS is configured, service_role_key bypasses RLS.

  // Cek device sudah terdaftar
  const registered = await isDeviceRegistered(key, deviceId);
  if (!registered) {
    return res.status(403).json({ error: 'Device not registered. Activate license first.' });
  }

  // ── DOWNLOAD ─────────────────────────────────────────────────────────
  if (action === 'download') {
    const vault = await getVault(key);
    if (!vault) {
      return res.status(200).json({ found: false });
    }
    return res.status(200).json({
      found: true,
      encryptedVault: vault.encrypted_vault,
      updatedAt: vault.updated_at,
      lastDeviceId: vault.last_device_id || null, // OpsiB: client uses this to skip modal if same device
    });
  }

  // ── UPLOAD ───────────────────────────────────────────────────────────
  if (action === 'upload') {
    if (!encryptedVault) {
      return res.status(400).json({ error: 'Missing encryptedVault' });
    }

    // Last write wins — cek timestamp
    const existing = await getVault(key);
    if (existing && localUpdatedAt) {
      const cloudTs = new Date(existing.updated_at).getTime();
      const localTs = new Date(localUpdatedAt).getTime();
      if (cloudTs > localTs) {
        // Cloud lebih baru — tolak upload, suruh download dulu
        return res.status(200).json({
          success: false,
          conflict: true,
          message: 'Cloud vault is newer. Download first.',
          cloudUpdatedAt: existing.updated_at,
        });
      }
    }

    await upsertVault(key, encryptedVault, deviceId);
    return res.status(200).json({ success: true });
  }

  return res.status(400).json({ error: 'Invalid action' });
}
