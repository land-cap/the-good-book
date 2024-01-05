import '~/index.css'

import { type Viewport } from 'next'
import { Work_Sans } from 'next/font/google'
import { type ReactNode } from 'react'
import { cx } from 'styled-system/css'
import { macrogrid } from 'styled-system/patterns'

import { RootProviders } from '~/app/_components/RootProviders'

const fontSans = Work_Sans({
	fallback: [
		'-apple-system',
		'BlinkMacSystemFont',
		'Segoe UI',
		'Roboto',
		'Helvetica',
		'Arial',
		'sans-serif',
		'Apple Color Emoji',
		'Segoe UI Emoji',
		'Segoe UI Symbol',
	],
	style: ['italic', 'normal'],
	subsets: ['latin-ext'],
	variable: '--font-sans',
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
	<html lang="en" className={cx(fontSans.variable)}>
		<RootProviders>
			<body
				className={macrogrid({
					_osDark: { color: 'fg.muted' },
					background: 'bg.canvas',
					color: 'fg',
					fontSize: 'regular',
					gridTemplateRows: 'min-content 1fr min-content',
					minH: '100dvh',
					overscrollBehavior: 'contain',
				})}
			>
				{children}
			</body>
		</RootProviders>
	</html>
)

export default RootLayout
