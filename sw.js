// sw.js — Hesych Service Worker
// Offline-first caching strategy

// BUMP versi ini setiap kali deploy agar cache lama otomatis dihapus
// Format: 'hesych-v{major}.{minor}' — contoh: v1.1, v1.2, v2.0
const CACHE_NAME = 'hesych-v1.0';

const ASSETS = [
  '/',
  '/index.html',
  '/landing.html',
  '/upgrade.html',
  '/share.html',
  '/manifest.json',
  '/og-image.png',
  '/icon-192.png',
  '/icon-512.png',
];

// Install: cache core assets
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// Activate: delete old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key.startsWith('hesych-') && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch: network-first untuk HTML, cache-first untuk assets
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Lewati API calls
  if (url.pathname.startsWith('/api/')) return;

  // Lewati request lintas origin
  if (url.origin !== location.origin) return;

  const isHTML = event.request.destination === 'document'
    || event.request.headers.get('accept')?.includes('text/html');

  if (isHTML) {
    // Network-first: selalu ambil versi terbaru, fallback ke cache jika offline
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request) || caches.match('/index.html'))
    );
  } else {
    // Cache-first untuk assets (icon, gambar, manifest)
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response && response.status === 200 && response.type === 'basic') {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        }).catch(() => {
          if (event.request.destination === 'document') {
            return caches.match('/index.html');
          }
        });
      })
    );
  }
});

// Message: terima perintah force update dari halaman
self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
