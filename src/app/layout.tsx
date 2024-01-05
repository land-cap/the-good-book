import '~/index.css'

import { type Viewport } from 'next'
import { type ReactNode } from 'react'
import { macrogrid } from 'styled-system/patterns'

import { RootProviders } from '~/app/_components/RootProviders'

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
	<html lang="en">
		<RootProviders>
			<body
				className={macrogrid({
					_osDark: { color: 'fg.muted' },
					background: 'bg.canvas',
					color: 'fg',
					fontSize: 'md',
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
