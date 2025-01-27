const CACHE_NAME = 'v2';
async function logCacheDetails(cache) {
    console.log('Cache opened');
    console.log('Name:', cache.name);

    try {
        const keys = await cache.keys();
        console.log('Keys:', keys);

        const size = keys.length; // Assuming you define size by the number of entries
        console.log('Size:', size);

        // If you need detailed entries or other operations, await them similarly
    } catch (error) {
        console.error('Error fetching cache details:', error);
    }
}

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open('v1').then(function (cache) {
            console.log("install");
            console.log('Cache opened:', cache.name);
            return cache.addAll([
                '/',
                '/index.html' // Ensure this is the correct path to your HTML file
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.open(CACHE_NAME).then(async function (cache) {
            console.log("fetch");
            // Log all cache keys (URLs of requests in cache)
            const cacheKeys = await cache.keys();
            console.log('Cache keys:', cacheKeys.map(request => request.url));

            return cache.match(event.request).then(function (response) {
                if (response) {
                    console.log('Cache hit for:', event.request.url);
                } else {
                    console.log('Cache miss for:', event.request.url);
                }

                // Always log the request URL
                console.log('Fetching:', event.request.url);

                // If not in cache, fetch from network
                return response || fetch(event.request).then(function (networkResponse) {
                    // Optionally update the cache
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            });
        })
    );
});

self.addEventListener('activate', (event) => {
    console.log("activate");
    event.waitUntil(
        caches.open(CACHE_NAME).then(logCacheDetails)
    );
});