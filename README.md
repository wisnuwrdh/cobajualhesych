# Hesych — Local-First Password Manager

A zero-knowledge, AES-256-GCM encrypted password manager. Fully self-hosted with optional cloud sync.

## Features

- **AES-256-GCM encryption** with PBKDF2 key derivation (600,000 iterations)
- **Vault Health** — detect weak, reused, or old passwords
- **TOTP / 2FA** storage with local code generation
- **Password generator** with bulk mode and passphrase support
- **Custom fields & tags** for organizing items
- **Encrypted share links** — share passwords securely via passphrase-protected links
- **HIBP breach check** — scan passwords against Have I Been Pwned
- **Biometric unlock** — fingerprint / face ID (WebAuthn)
- **Cloud sync** (optional) — sync encrypted vault across devices
- **PWA** — installable on mobile & desktop
- **Offline-first** — 100% local, no server needed
- **Zero telemetry, no tracking**

## Prerequisites

- [Vercel](https://vercel.com) account (for hosting)
- [Supabase](https://supabase.com) account (optional, for cloud sync)
- [Upstash](https://upstash.com) account (optional, for rate limiting)

## Quick Start

### 1. Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/wisnuwrdh/cobajualhesych)

Or via CLI:

```bash
git clone https://github.com/wisnuwrdh/cobajualhesych.git
cd cobajualhesych
vercel --prod
```

### 2. Set up Cloud Sync (Optional)

If you want cross-device sync, set up Supabase and Redis.

Skip this step if you only need local storage.

#### Supabase Tables

Run these SQL statements in your Supabase SQL Editor:

```sql
CREATE TABLE vault_sync (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  license_key TEXT NOT NULL UNIQUE,
  encrypted_vault TEXT NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_device_id TEXT
);
```

#### Upstash Redis

Create a database at [upstash.com](https://upstash.com) and copy your REST URL and token.

### 3. Environment Variables

Set these in your Vercel project dashboard:

| Variable | Required | Description |
|----------|----------|-------------|
| `SUPABASE_URL` | For sync | Your Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | For sync | Your Supabase service role key |
| `UPSTASH_REDIS_REST_URL` | For sync | Your Upstash Redis REST URL |
| `UPSTASH_REDIS_REST_TOKEN` | For sync | Your Upstash Redis REST token |

### 4. Done

Your app is live at `https://your-project.vercel.app` — root URL redirects to the app automatically.

## Custom Domain

1. Add your domain in Vercel dashboard → Project → Domains
2. Update your DNS records as instructed by Vercel
3. Update CSP headers in `vercel.json` to match your domain (the `connect-src` directive)

No other configuration needed.

## Branding

All brand assets are plain files — no build step required.

| Asset | File(s) |
|-------|---------|
| Logo (dark) | `logo-dark.webp` |
| Logo (light) | `logo-light.webp` |
| Favicon | `favicon.ico` |
| App Icons | `icon-192.png`, `icon-512.png` |
| App Name | `app.html` (title), `manifest.json` |
| Theme colors | CSS variables in `app.css` |

## File Structure

```
hesych/
├── app.html            # Main app shell
├── app.js              # App logic (6250 lines)
├── app.css             # Styles
├── sw.js               # Service worker (offline cache)
├── vercel.json         # Vercel config (redirect, CSP, headers)
├── manifest.json       # PWA manifest
├── share.html          # Shared password viewer
├── share.js            # Share link decryption
├── share.css           # Share page styles
├── fonts.css           # Font declarations
├── fonts/              # Font files
├── favicons/           # Brand favicon database
├── api/
│   ├── sync.js         # Cloud sync serverless function
│   └── package.json    # API dependencies
├── README.md           # This file
├── LICENSE.txt         # License terms
└── *.webp / *.png      # Logos and icons
```

## License

This project is sold as a source code package. See `LICENSE.txt` for terms.

## Support

For issues with the source code, contact the original author.
