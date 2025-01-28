const CACHE_NAME = 'html-cache';
const URLS_TO_CACHE = [
    '/tests/test-service-worker.html', // Corrected path
    '/tests/resources/style.css', // Add any CSS used by the test
];

// Install event: Cache the specified files and log them
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing and caching files...');
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Files being cached:', URLS_TO_CACHE);
            return cache.addAll(URLS_TO_CACHE);
        }).then(() => {
            console.log('Service Worker: Files cached successfully.');
        }).catch((error) => {
            console.error('Service Worker: Caching failed:', error);
        })
    );
});

// Fetch event: Serve files from cache or network
self.addEventListener('fetch', (event) => {
    console.log(`Service Worker: Fetching ${event.request.url}`);
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                console.log(`Service Worker: Serving from cache: ${event.request.url}`);
                return cachedResponse;
            }

            if (!navigator.onLine) {
                console.warn(`Service Worker: Offline. Cannot fetch ${event.request.url}`);
                return new Response('Offline. Data cannot be retrieved.', {
                    headers: { 'Content-Type': 'text/plain' },
                });
            }

            // Fetch from network and cache
            return fetch(event.request).then((networkResponse) => {
                return caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, networkResponse.clone());
                    console.log(`Service Worker: Network response cached: ${event.request.url}`);
                    return networkResponse;
                });
            });
        })
    );
});

// Activate event: Clean up old caches
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activating and cleaning old caches...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log(`Service Worker: Deleting old cache: ${cacheName}`);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
