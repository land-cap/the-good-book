import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	server: {
		port: 4000,
	},
        plugins: [
                tsConfigPaths({
                        projects: ['./tsconfig.json'],
                }),
                tanstackStart({ customViteReactPlugin: true }),
                viteReact(),
                VitePWA({
                        registerType: 'autoUpdate',
                        manifest: {
                                name: 'The Good Book',
                                short_name: 'GoodBook',
                                description: 'An offline-first Bible reading app.',
                                theme_color: '#ffffff',
                                icons: [
                                        { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
                                        { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
                                        { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
                                ],
                        },
                        workbox: {
                                globPatterns: ['**/*.{js,css,html,ico,png,svg,json,webmanifest}'],
                                runtimeCaching: [
                                        {
                                                urlPattern: /bible-data\.json$/,
                                                handler: 'NetworkFirst',
                                                options: {
                                                        cacheName: 'bible-data-cache',
                                                        expiration: {
                                                                maxEntries: 1,
                                                                maxAgeSeconds: 24 * 60 * 60,
                                                        },
                                                },
                                        },
                                        {
                                                urlPattern: ({ request }) =>
                                                        request.destination === 'document' ||
                                                        request.destination === 'script' ||
                                                        request.destination === 'style' ||
                                                        request.destination === 'image' ||
                                                        request.destination === 'font',
                                                handler: 'StaleWhileRevalidate',
                                                options: {
                                                        cacheName: 'app-shell-cache',
                                                        expiration: {
                                                                maxEntries: 50,
                                                                maxAgeSeconds: 7 * 24 * 60 * 60,
                                                        },
                                                },
                                        },
                                ],
                        },
                }),
        ],
})
