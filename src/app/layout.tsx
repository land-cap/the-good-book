import '~/index.css'

import { type Viewport } from 'next'
import { token } from 'styled-system/tokens'

export { RootLayout as default } from '~/layouts'

export const metadata = {
	description: 'Read the Bible without distractions.',
	icons: [{ rel: 'icon', url: '/favicon.png' }],
	other: {
		'apple-mobile-web-app-capable': 'yes',
	},
	title: 'The Good Book',
}

export const viewport = (): Viewport => ({
	initialScale: 1,
	maximumScale: 1,
	minimumScale: 1,
	userScalable: false,
	viewportFit: 'cover',
	width: 'device-width',
	themeColor: [
		{
			media: '(prefers-color-scheme: light)',
			color: token('colors.white'),
		},
		{
			media: '(prefers-color-scheme: dark)',
			color: token('colors.neutral.900'),
		},
	],
})
