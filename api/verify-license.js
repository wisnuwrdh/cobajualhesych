// api/verify-license.js — Vercel Serverless Function
// Verifies Gumroad license keys + device limit (max 3) via Supabase
//
// Required env vars:
//   GUMROAD_PRODUCT_ID        — Product ID dari Gumroad dashboard
//   SUPABASE_URL              — Supabase project URL
//   SUPABASE_SERVICE_ROLE_KEY — Supabase service role key

const MAX_DEVICES = 3;

// Simple in-memory rate limiter — max 10 attempts per IP per 15 minutes
const _rateMap = new Map();
function isRateLimited(ip) {
  const now = Date.now();
  const window = 15 * 60 * 1000;
  const max = 10;
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
function supabase() {
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

async function getDevices(licenseKey) {
  const { url, headers } = supabase();
  const res = await fetch(
    `${url}/rest/v1/license_devices?license_key=eq.${encodeURIComponent(licenseKey)}&select=device_id,device_name,activated_at`,
    { headers }
  );
  return await res.json();
}

async function addDevice(licenseKey, deviceId, deviceName) {
  const { url, headers } = supabase();
  await fetch(`${url}/rest/v1/license_devices`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ license_key: licenseKey, device_id: deviceId, device_name: deviceName }),
  });
}

async function removeDevice(licenseKey, deviceId) {
  const { url, headers } = supabase();
  await fetch(
    `${url}/rest/v1/license_devices?license_key=eq.${encodeURIComponent(licenseKey)}&device_id=eq.${encodeURIComponent(deviceId)}`,
    { method: 'DELETE', headers }
  );
}

// ── Main handler ──────────────────────────────────────────────────────────
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ valid: false, error: 'Too many attempts. Try again later.' });
  }

  const { license, deviceId, deviceName, action } = req.body;

  if (!license || typeof license !== 'string') {
    return res.status(400).json({ valid: false, error: 'Missing license key' });
  }

  const key = license.trim();

  // Handle list devices
  if (action === 'list') {
    if (!deviceId) return res.status(400).json({ error: 'Missing deviceId' });
    const devices = await getDevices(key);
    return res.status(200).json({ devices });
  }

  // Handle remove device
  if (action === 'remove') {
    if (!deviceId) return res.status(400).json({ error: 'Missing deviceId' });
    await removeDevice(key, deviceId);
    return res.status(200).json({ success: true });
  }

  if (!deviceId || typeof deviceId !== 'string') {
    return res.status(400).json({ valid: false, error: 'Missing device ID' });
  }

  // Verify via Gumroad
  const gumroadResult = await verifyGumroadKey(key);
  if (!gumroadResult.valid) {
    return res.status(200).json(gumroadResult);
  }

  // Device limit check
  const devices = await getDevices(key);
  const existingDevice = devices.find(d => d.device_id === deviceId);

  if (existingDevice) {
    return res.status(200).json({ valid: true });
  }

  if (devices.length >= MAX_DEVICES) {
    return res.status(200).json({
      valid: false,
      error: `Device limit reached. Maximum ${MAX_DEVICES} devices allowed. Remove a device first.`,
      deviceLimitReached: true,
      devices,
    });
  }

  // Daftarkan device baru
  const name = deviceName || getAutoDeviceName(req);
  await addDevice(key, deviceId, name);
  return res.status(200).json({ valid: true });
}

function getAutoDeviceName(req) {
  const ua = req.headers['user-agent'] || '';
  if (/iPhone/.test(ua)) return 'iPhone';
  if (/iPad/.test(ua)) return 'iPad';
  if (/Android/.test(ua) && /Mobile/.test(ua)) return 'Android Phone';
  if (/Android/.test(ua)) return 'Android Tablet';
  if (/Macintosh/.test(ua)) return 'Mac';
  if (/Windows/.test(ua)) return 'Windows PC';
  if (/Linux/.test(ua)) return 'Linux PC';
  return 'Unknown Device';
}

// ── Verify via Gumroad API ────────────────────────────────────────────────
async function verifyGumroadKey(licenseKey) {
  const productId = process.env.GUMROAD_PRODUCT_ID;
  if (!productId) {
    console.error('GUMROAD_PRODUCT_ID env var not set');
    return { valid: false, error: 'Server misconfiguration' };
  }

  try {
    const body = new URLSearchParams();
    body.append('product_id', productId);
    body.append('license_key', licenseKey);
    body.append('increment_uses_count', 'false');

    const response = await fetch('https://api.gumroad.com/v2/licenses/verify', {
      method: 'POST',
      body,
    });

    const data = await response.json();

    if (!data.success) {
      return { valid: false };
    }
    if (data.purchase?.test) {
      return { valid: false, error: 'Test purchases are not valid.' };
    }
    if (data.purchase?.refunded) {
      return { valid: false, error: 'This license has been refunded.' };
    }
    if (data.purchase?.chargebacked) {
      return { valid: false };
    }

    return { valid: true };

  } catch (err) {
    console.error('Gumroad license verification error:', err);
    return { valid: false, error: 'Verification failed' };
  }
}
