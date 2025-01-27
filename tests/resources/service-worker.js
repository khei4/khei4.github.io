self.addEventListener('install', (event) => {
    console.log('Service Worker installing...');
    // 必要なファイルをキャッシュに追加
    event.waitUntil(
        caches.open('my-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/tests/test1.html',
                '/tests/resources/style.css',
                '/tests/resources/app.js',
            ]);
        })
    );
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activated...');
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // キャッシュがあればそれを返し、なければネットワークから取得
            return response || fetch(event.request);
        })
    );
});
