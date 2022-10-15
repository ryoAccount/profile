const cacheName = "puyopuyo-app";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/src/config.js",
  "/src/game.js",
  "/src/player.js",
  "/src/puyoimage.js",
  "/src/score.js",
  "/src/stage.js",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
