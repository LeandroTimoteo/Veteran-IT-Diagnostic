const CACHE_NAME = 'vapezone-v1';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './assets/images/elf-bar.png',
  './assets/images/geekvape.png',
  './assets/images/vaporesso.png',
  './assets/images/smok.png',
  './assets/images/lost-mary.png',
  './assets/images/voopoo.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
