
var cacheName = 'aarohi_cache';
self.addEventListener('aarohi', function (e) {
    console.log('aarohi');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll([
                '/index.html',
                '../src/components/Collections.js'
            ]);

        })

    );
});
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(cacheName).then(cache =>
            cache.match(event.request, { ignoreSearch: true })
        )
        .then(response => {
            return response || fetch(event.request);
        })
    );
});