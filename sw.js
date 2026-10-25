// Tavola viva funziona anche senza internet: i file dell'app restano in memoria.
// Con la rete disponibile si scarica sempre la versione più recente.
const CACHE = 'tavolaviva-v34';
const FILES = ['./', './index.html', './proiezioni.html', './privacy.html', './manifest.webmanifest', './icone/icona-192.png', './icone/icona-512.png', './icone/icona-maskable-512.png', './icone/apple-touch-icon.png', './icone/favicon-32.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('./index.html'))));
});
