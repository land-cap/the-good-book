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
      }),
   ],
})
