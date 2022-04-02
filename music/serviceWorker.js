const staticMusic = "music-app"
const assets = [
    "/",
    "/index.html",
    "/style.css",
    "/app.js",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticMusic).then(cache => {
        cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
        })
    )
})