import '~/index.css'

import { type Viewport } from 'next'
import localFont from 'next/font/local'
import { type ReactNode } from 'react'
import { cx } from 'styled-system/css'
import { macrogrid } from 'styled-system/patterns'

import { RootProviders } from '~/app/_components/RootProviders'

const fontGeist = localFont({
	src: [
		{ path: './_fonts/Geist-Regular.woff2', weight: '400' },
		{
			path: './_fonts/Geist-Regular.otf',
			weight: '400',
		},
		{ path: './_fonts/Geist-Bold.woff2', weight: '700' },
		{ path: './_fonts/Geist-Bold.otf', weight: '700' },
	],
	variable: '--font-sans',
})

const fontGeistMono = localFont({
	src: [
		{ path: './_fonts/GeistMono-Regular.woff2', weight: '400' },
		{
			path: './_fonts/GeistMono-Regular.otf',
			weight: '400',
		},
		{ path: './_fonts/GeistMono-Bold.woff2', weight: '700' },
		{ path: './_fonts/GeistMono-Bold.otf', weight: '700' },
	],
	variable: '--font-mono',
})

export const metadata = {
	description: 'Read the Bible without distractions.',
	icons: [{ rel: 'icon', url: '/favicon.png' }],
	other: {
		'apple-mobile-web-app-capable': 'yes',
	},
	title: 'The Good Book',
}

export const viewport: Viewport = {
	initialScale: 1,
	maximumScale: 1,
	minimumScale: 1,
	userScalable: false,
	viewportFit: 'cover',
	width: 'device-width',
}

const RootLayout = ({ children }: { children: ReactNode }) => (
	<RootProviders>
		<html lang="en" className={cx(fontGeist.variable, fontGeistMono.variable)}>
			<body
				className={macrogrid({
					_osDark: { color: 'fg.muted' },
					background: 'bg.canvas',
					color: 'fg',
					fontSize: 'sm',
					gridTemplateRows: 'min-content 1fr min-content',
					minH: 'full',
					overscrollBehavior: 'contain',
					sm: { fontSize: 'md' },
				})}
			>
				{children}
			</body>
		</html>
	</RootProviders>
)

export default RootLayout
