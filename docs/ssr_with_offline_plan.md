## TanStack Start Bible App: SSR + Offline Support Plan

This outlines the setup for a **TanStack Start** app (using **TanStack Router + TanStack Query**) with both **full SSR** and **offline support** for a Bible reading app where each chapter route like `/read/john/1` is SSR’d but also available offline.

---

### ✅ Goals

- SSR when **online** for full HTML + SEO
- Work **offline** with cached data (chapters) using TanStack Query
- Avoid hydration errors when offline
- Support a single request for all chapters data (no need to cache per-page HTML)

---

### 🧠 Key Ideas

1. **Use SSR normally** when online.

   - Chapter pages like `/read/john/1` fetch on the server using TanStack Query’s `dehydrate` + `hydrate`.

2. **Cache chapters JSON data** with Service Worker.

   - Don’t try to cache full SSR HTML documents.
   - Instead, cache the single JSON API request that fetches **all chapters**.

3. **On offline navigation**, **skip fetch**, and just use cached data from TanStack Query’s cache.

---

### 🧱 Implementation Structure

#### 1. **TanStack Query Setup**

Use `dehydrate` and `hydrate` on SSR pages:

```ts
// server.ts
export const loader = async ({ params }) => {
  const queryClient = new QueryClient()

  // Prefetch all chapters (or specific one if needed)
  await queryClient.prefetchQuery(['bible-chapters'], fetchChapters)

  return {
    dehydratedState: dehydrate(queryClient),
  }
}
```

#### 2. **Client Rehydration**

```tsx
<Hydrate state={dehydratedState}>
  <QueryClientProvider client={queryClient}>
    <YourRoutes />
  </QueryClientProvider>
</Hydrate>
```

#### 3. \*\*Route Page: \*\*``

Client renders from cache, even offline:

```tsx
const { book, chapter } = useParams()
const { data } = useQuery(['bible-chapters'], fetchChapters)

const current = data?.[book]?.[chapter]
```

No additional fetch needed.

---

### 📦 Service Worker Strategy

- Cache the **single JSON request** `GET /api/bible-chapters.json`
- Cache static assets + root document `/` (app shell)
- Use `workbox` or `vite-plugin-pwa`

Example Workbox handler:

```js
registerRoute(
  ({ url }) => url.pathname.endsWith('/bible-chapters.json'),
  new NetworkFirst({
    cacheName: 'chapters-cache',
    plugins: [
      new ExpirationPlugin({ maxEntries: 1, maxAgeSeconds: 86400 }),
    ],
  }),
)
```

---

### 🧩 Avoid Hydration Errors

> You were concerned about hydration errors when SSR fails due to being offline.

- This setup avoids hydration errors because:
  - The client renders from TanStack Query cache
  - No data mismatch occurs (data is already cached and matched)
  - HTML shell loads, then React takes over without missing data
-
