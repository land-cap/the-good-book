/// <reference types="vite/client" />
import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import * as React from 'react'
import { ReactNode, useEffect } from 'react'
import { registerSW } from 'virtual:pwa-register'
import appCss from '~/styles/global.css?url'
import { DefaultCatchBoundary } from '../errorScreens/DefaultCatchBoundary'
import { NotFound } from '../errorScreens/NotFound'

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: 'utf-8',
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
		],
		links: [
			{ rel: 'stylesheet', href: appCss },
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/apple-touch-icon.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicon-32x32.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicon-16x16.png',
			},
			{ rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
			{ rel: 'icon', href: '/favicon.ico' },
		],
	}),
	errorComponent: DefaultCatchBoundary,
	notFoundComponent: () => <NotFound />,
	shellComponent: RootDocument,
})

function RootDocument({ children }: { children: ReactNode }) {
	return (
		<html>
		<head>
			<HeadContent />
		</head>
		<body>
		{children}
		<ServiceWorkerRegister />
		<TanStackRouterDevtools position="bottom-right" />
		<Scripts />
		</body>
		</html>
	)
}

function ServiceWorkerRegister() {
	useEffect(() => {
		if ('serviceWorker' in navigator) {
			registerSW({ immediate: true })
			navigator.serviceWorker.ready.then(() => {
				import('~/utils/shared')
					.then((m) => m.getBibleData())
					.catch(() => {
					})
			})
		}
	}, [])
	return null
}
