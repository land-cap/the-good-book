self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('app-shell-cache').then(cache => cache.add('/'))
  )
})

self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match('/'))
    )
  }
})
