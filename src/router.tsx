import { createRouter as createTanStackRouter } from '@tanstack/react-router'

import { DefaultCatchBoundary, NotFound } from '@/error-ui/shared'

import { routeTree } from './routeTree.gen'

export const createRouter = () =>
   createTanStackRouter({
      routeTree,
      defaultPreload: 'intent',
      defaultErrorComponent: DefaultCatchBoundary,
      defaultNotFoundComponent: () => <NotFound />,
      scrollRestoration: true,
   })

declare module '@tanstack/react-router' {
   interface Register {
      router: ReturnType<typeof createRouter>
   }
}
