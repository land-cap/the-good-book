import '~/index.css'

import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { type Viewport } from 'next'
import { type ReactNode } from 'react'
import { css, cx } from 'styled-system/css'
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
	<html
		lang="en"
		className={cx(
			//eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-argument
			GeistSans.variable,
			GeistMono.variable,
			css({
				'--font-mono': 'var(--font-geist-mono)',
				'--font-sans': 'var(--font-geist-sans)',
			}),
		)}
	>
		<RootProviders>
			<body
				className={macrogrid({
					_osDark: { color: 'fg.muted' },
					background: 'bg.canvas',
					color: 'fg',
					fontSize: 'sm',
					gridTemplateRows: 'min-content 1fr min-content',
					minH: '100dvh',
					overscrollBehavior: 'contain',
					sm: { fontSize: 'md' },
				})}
			>
				{children}
			</body>
		</RootProviders>
	</html>
)

export default RootLayout
