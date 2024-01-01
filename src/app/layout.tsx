import '~/index.css'

import { type Viewport } from 'next'
import { DM_Mono, DM_Sans } from 'next/font/google'
import { type ReactNode } from 'react'
import { cx } from 'styled-system/css'
import { macrogrid } from 'styled-system/patterns'

import { RootProviders } from '~/app/_components/RootProviders'

const fontSans = DM_Sans({
	axes: ['opsz'],
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
	subsets: ['latin-ext'],
	variable: '--font-sans',
})

const fontMono = DM_Mono({
	fallback: [
		'ui-monospace',
		'Menlo',
		'Monaco',
		'Cascadia Mono',
		'Segoe UI Mono',
		'Roboto Mono',
		'Oxygen Mono',
		'Ubuntu Monospace',
		'Source Code Pro',
		'Fira Mono',
		'Droid Sans Mono',
		'Courier New',
		'monospace',
	],
	style: ['italic', 'normal'],
	subsets: ['latin-ext'],
	variable: '--font-mono',
	weight: ['300', '400', '500'],
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
	<html lang="en" className={cx(fontSans.variable, fontMono.variable)}>
		<RootProviders>
			<body
				className={macrogrid({
					_osDark: { color: 'fg.muted' },
					background: 'bg.canvas',
					color: 'fg',
					fontSize: 'base',
					gridTemplateRows: '1fr min-content',
					h: '100dvh',
					overflow: 'clip',
				})}
			>
				{children}
			</body>
		</RootProviders>
	</html>
)

export default RootLayout
