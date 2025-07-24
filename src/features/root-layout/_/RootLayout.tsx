import { HeadContent, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import * as React from 'react'
import { ReactNode } from 'react'
import { useEffect } from 'react'
import { registerSW } from 'virtual:pwa-register'

const UseServiceWorkerRegister = () => {
	useEffect(() => {
		void (async () => {
			if ('serviceWorker' in navigator) {
				registerSW({ immediate: true })
				await navigator.serviceWorker.ready
				import('~/utils/shared')
					.then((mod) => mod.getBibleData())
					.catch((error) => {
						console.error('Service worker registration failed:', error)
					})
			}
		})()
	}, [])

	return null
}


export const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		// TODO: pass correct lang attribute when implementing i18n
		// eslint-disable-next-line jsx-a11y/html-has-lang
		<html>
		{/* TODO: add title and all required meta tags */}
		<head>
			<HeadContent />
		</head>
		<body>
		{children}
		<UseServiceWorkerRegister />
		<TanStackRouterDevtools position="bottom-right" />
		<Scripts />
		</body>
		</html>
	)
}