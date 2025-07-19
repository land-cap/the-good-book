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
			injectRegister: false,
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
		}),
	],
})
