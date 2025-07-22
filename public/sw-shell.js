self.addEventListener('install', event => {
	event.waitUntil(caches.open('app-shell-cache').then(cache => cache.add('/_shell.html')))
})

self.addEventListener('fetch', event => {
	if (event.request.mode === 'navigate') {
		event.respondWith((async () => {
			// If online, try network as usual
			if (self.navigator.onLine) {
				return fetch(event.request)
			}

			// If offline, serve the cached shell
			const cache = await caches.open('app-shell-cache')
			const cachedShell = await cache.match('/_shell.html')
			if (cachedShell) {
				return cachedShell
			}

			// Last resort fallback
			return new Response('<!DOCTYPE html><h1>Offline</h1>', { headers: { 'Content-Type': 'text/html' } })
		})())
	}
})