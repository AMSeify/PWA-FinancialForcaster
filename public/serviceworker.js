const CATCH_NAME = "version-1"
const urlsToCatch = ["index.html", "offline.html"]

const self = this

// installing ServiceWorker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CATCH_NAME).then((cache) => {
      console.log("Opened cache")
      return cache.addAll(urlsToCatch)
    })
  )
})
// Listen for request
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match("offline.html"))
    })
  )
})
//Activate the Sw

self.addEventListener("activate", (event) => {
  const cacheWhiteList = []
  cacheWhiteList.push(CATCH_NAME)

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName)
          }
        })
      )
    )
  )
})
