import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
   build: {
      sourcemap: true,
   },
   server: {
      port: 4000,
   },
   plugins: [
      tsConfigPaths({
         projects: ['./tsconfig.json'],
      }),
      tanstackStart({
         target: 'netlify',
         customViteReactPlugin: true,
         prerender: {
            enabled: true,
            onSuccess: ({ page }) => {
               console.log(`Prerendered: ${page.path}`)
            },
         },
         pages: [
            {
               path: '/shell',
               prerender: { enabled: true, outputPath: '/_shell.html' },
            },
         ],
      }),
      viteReact(),
      VitePWA({
         injectRegister: false,
         manifest: {
            name: 'The Good Book',
            short_name: 'Good Book',
            description: 'An offline-first Bible reading app.',
            theme_color: '#ffffff',
            icons: [
               {
                  src: '/android-chrome-192x192.png',
                  sizes: '192x192',
                  type: 'image/png',
               },
               {
                  src: '/android-chrome-512x512.png',
                  sizes: '512x512',
                  type: 'image/png',
               },
               {
                  src: '/apple-touch-icon.png',
                  sizes: '180x180',
                  type: 'image/png',
               },
            ],
         },
      }),
   ],
})
