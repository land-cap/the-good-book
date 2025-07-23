import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { DefaultCatchBoundary } from './errorScreens/DefaultCatchBoundary'
import { NotFound } from './errorScreens/NotFound'


export const createRouter = () => createTanStackRouter({
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
