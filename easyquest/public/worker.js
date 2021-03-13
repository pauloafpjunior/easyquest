const CACHE_NAME = 'easy-quest';
const urlsToCache = ['/', '/styles/styles.css', '/script/webpack-bundle.js'];

// Install a service worker
self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

// Cache and return requests
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      // Open a cache and cache our files
      cache.addAll(urlsToCache)
    )
  );
});

self.addEventListener('fetch', (event) => {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
