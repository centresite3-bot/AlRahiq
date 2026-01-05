const CACHE_NAME = 'centre-errahik-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/manifest.json',
  'https://raw.githubusercontent.com/centresite3-bot/AlRahiq/refs/heads/main/logo.jpeg',
  'https://raw.githubusercontent.com/centresite3-bot/AlRahiq/refs/heads/main/avant.jpg',
  'https://raw.githubusercontent.com/centresite3-bot/AlRahiq/refs/heads/main/apres.jpg',
  'https://raw.githubusercontent.com/centresite3-bot/AlRahiq/refs/heads/main/avant%20peau.jpg',
  'https://raw.githubusercontent.com/centresite3-bot/AlRahiq/refs/heads/main/apres%20peau.jpg',
  'https://raw.githubusercontent.com/centresite3-bot/AlRahiq/refs/heads/main/Salle%20de%20consultation.jpg',
  'https://raw.githubusercontent.com/centresite3-bot/AlRahiq/refs/heads/main/%C3%89quipements%20laser.png',
  'https://raw.githubusercontent.com/centresite3-bot/AlRahiq/refs/heads/main/R%C3%A9ception.jpg',
  'https://raw.githubusercontent.com/centresite3-bot/AlRahiq/refs/heads/main/Zone%20de%20relaxation.jpg',
];;

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache if available
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
