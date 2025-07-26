module.exports = {
   globDirectory: '.output/public',
   globPatterns: ['**/*.{js,css,html,png,svg,json,webmanifest}', '_shell.html'],
   swDest: 'public/sw.js',
   clientsClaim: true,
   skipWaiting: true,
   importScripts: ['sw-shell.js'],
   runtimeCaching: [
      {
         urlPattern: /\/api\/messages\/[^/]+$/,
         handler: 'NetworkFirst',
         options: {
            cacheName: 'messages',
            expiration: {
               maxEntries: 1000,
               maxAgeSeconds: 24 * 60 * 60,
            },
         },
      },
      {
         urlPattern: /book-list\.json$/,
         handler: 'NetworkFirst',
         options: {
            cacheName: 'book-list',
            expiration: {
               maxEntries: 1,
               maxAgeSeconds: 24 * 60 * 60,
            },
         },
      },
      {
         urlPattern: /chapter-content-data\.json$/,
         handler: 'NetworkFirst',
         options: {
            cacheName: 'chapter-content-data',
            expiration: {
               maxEntries: 1,
               maxAgeSeconds: 24 * 60 * 60,
            },
         },
      },
      {
         // Cache app shell: HTML, JS, CSS, and static assets
         urlPattern: ({ request }) =>
            request.destination === 'document' ||
            request.destination === 'script' ||
            request.destination === 'style' ||
            request.destination === 'image' ||
            request.destination === 'font',
         handler: 'StaleWhileRevalidate',
         options: {
            cacheName: 'app-shell',
            expiration: {
               maxEntries: 50,
               maxAgeSeconds: 7 * 24 * 60 * 60, // 1 week
            },
         },
      },
   ],
}
