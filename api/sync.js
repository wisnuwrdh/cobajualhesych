// api/sync.js — Vercel Serverless Function
// Cloud Sync untuk Hesych — upload & download encrypted vault
//
// Required env vars:
//   GUMROAD_PRODUCT_ID        — Product ID dari Gumroad dashboard
//   SUPABASE_URL              — Supabase project URL
//   SUPABASE_SERVICE_ROLE_KEY — Supabase service role key

// Simple in-memory rate limiter — max 20 req/IP/15 menit
const _rateMap = new Map();
function isRateLimited(ip) {
  const now = Date.now();
  const window = 15 * 60 * 1000;
  const max = 20;
  const entry = _rateMap.get(ip) || { count: 0, start: now };
  if (now - entry.start > window) {
    _rateMap.set(ip, { count: 1, start: now });
    return false;
  }
  entry.count++;
  _rateMap.set(ip, entry);
  return entry.count > max;
}

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
    `${url}/rest/v1/vault_sync?license_key=eq.${encodeURIComponent(licenseKey)}&select=encrypted_vault,updated_at`,
    { headers }
  );
  const data = await res.json();
  return data[0] || null;
}

async function upsertVault(licenseKey, encryptedVault) {
  const { url, headers } = getSupabase();
  await fetch(`${url}/rest/v1/vault_sync`, {
    method: 'POST',
    headers: { ...headers, 'Prefer': 'resolution=merge-duplicates' },
    body: JSON.stringify({
      license_key: licenseKey,
      encrypted_vault: encryptedVault,
      updated_at: new Date().toISOString(),
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
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Try again later.' });
  }

  const { license, deviceId, action, encryptedVault, localUpdatedAt } = req.body;

  if (!license || !deviceId) {
    return res.status(400).json({ error: 'Missing license or deviceId' });
  }

  const key = license.trim();

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

    await upsertVault(key, encryptedVault);
    return res.status(200).json({ success: true });
  }

  return res.status(400).json({ error: 'Invalid action' });
}
