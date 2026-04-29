// api/verify-license.js — Vercel Serverless Function
// Verifies Gumroad license keys via Gumroad API
//
// Required env vars:
//   GUMROAD_PRODUCT_ID   — Product ID dari Gumroad dashboard

// Simple in-memory rate limiter — max 10 attempts per IP per 15 minutes
const _rateMap = new Map();
function isRateLimited(ip) {
  const now = Date.now();
  const window = 15 * 60 * 1000; // 15 menit
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

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ valid: false, error: 'Too many attempts. Try again later.' });
  }

  const { license } = req.body;

  if (!license || typeof license !== 'string') {
    return res.status(400).json({ valid: false, error: 'Missing license key' });
  }

  const key = license.trim();

  return await verifyGumroadKey(key, res);
}

// ── Verify via Gumroad API ────────────────────────────────────────────────
async function verifyGumroadKey(licenseKey, res) {
  const productId = process.env.GUMROAD_PRODUCT_ID;
  if (!productId) {
    console.error('GUMROAD_PRODUCT_ID env var not set');
    return res.status(500).json({ valid: false, error: 'Server misconfiguration' });
  }

  try {
    const body = new URLSearchParams();
    body.append('product_id', productId);
    body.append('license_key', licenseKey);
    body.append('increment_uses_count', 'false'); // jangan increment, hanya verifikasi

    const response = await fetch('https://api.gumroad.com/v2/licenses/verify', {
      method: 'POST',
      body,
    });

    const data = await response.json();

    if (!data.success) {
      console.warn('Gumroad verification failed:', data.message);
      return res.status(200).json({ valid: false });
    }

    // Pastikan bukan test purchase
    if (data.purchase?.test) {
      console.warn('Test purchase rejected');
      return res.status(200).json({ valid: false, error: 'Test purchases are not valid.' });
    }

    // Pastikan tidak di-refund
    if (data.purchase?.refunded) {
      console.warn('Refunded purchase rejected');
      return res.status(200).json({ valid: false, error: 'This license has been refunded.' });
    }

    // Pastikan tidak di-chargebacked
    if (data.purchase?.chargebacked) {
      console.warn('Chargebacked purchase rejected');
      return res.status(200).json({ valid: false });
    }

    return res.status(200).json({ valid: true });

  } catch (err) {
    console.error('Gumroad license verification error:', err);
    return res.status(500).json({ valid: false, error: 'Verification failed' });
  }
}
