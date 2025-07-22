# Offline Support Implementation Plan

This document outlines the steps required to implement offline support for the application using `vite-plugin-pwa`.

## Strategy

The chosen strategy is to cache the application shell and a single JSON file containing all the bible data. This approach is highly efficient and provides a true offline experience. Client-side navigation will be used to render pages from the cached JSON data.

## Key Steps

1.  **Install `vite-plugin-pwa`:**
    ```bash
    pnpm add vite-plugin-pwa -D
    ```

2.  **Place `bible-data.json` in the `public` directory:**
    Ensure the `bible-data.json` file is located in the `/public` directory. This will ensure it is copied to the root of the build output directory.

3.  **Configure `vite.config.ts`:**
    Update `vite.config.ts` to include the `VitePWA` plugin and configure it to cache the app shell and the bible data.

    ```typescript
    // vite.config.ts
    import { defineConfig } from 'vite'
    import { VitePWA } from 'vite-plugin-pwa'

    export default defineConfig({
      plugins: [
        VitePWA({
          registerType: 'autoUpdate',
          manifest: {
            name: 'The Good Book',
            short_name: 'GoodBook',
            description: 'An offline-first Bible reading app.',
            theme_color: '#ffffff',
            icons: [
              // Add app icons here
            ]
          },
          workbox: {
            globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
            includeAssets: ['**/*'],
          }
        })
      ]
    })
    ```

4.  **Fetch Data in the Application:**
    In the application's logic, fetch the `bible-data.json` file. The service worker will intercept this request and serve the cached version when the user is offline.

    ```typescript
    // Example of fetching data in the app
    async function loadBibleData() {
      try {
        const response = await fetch('/bible-data.json'); // Service worker will intercept this
        const bibleData = await response.json();
        // Use bibleData to build pages client-side
        console.log('Bible data loaded successfully!');
      } catch (error) {
        console.error('Failed to load Bible data:', error);
      }
    }

    loadBibleData();
    ```
