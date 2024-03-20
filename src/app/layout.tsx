import '~/index.css'

import { type Viewport } from 'next'
import { cookies } from 'next/headers'
import { token } from 'styled-system/tokens'

import { THEME } from '~/state'

export { RootLayout as default } from '~/layouts'

export const metadata = {
	description: 'Read the Bible without distractions.',
	icons: [{ rel: 'icon', url: '/favicon.png' }],
	other: {
		'apple-mobile-web-app-capable': 'yes',
	},
	title: 'The Good Book',
}

export const viewport = (): Viewport => {
	const cookieStore = cookies()
	const theme = cookieStore.get('theme')?.value as THEME

	const isSepiaTheme = theme === THEME.Sepia

	return {
		initialScale: 1,
		maximumScale: 1,
		minimumScale: 1,
		userScalable: false,
		viewportFit: 'cover',
		width: 'device-width',
		themeColor: [
			{
				media: '(prefers-color-scheme: light)',
				color: isSepiaTheme ? token('colors.sepia.50') : token('colors.white'),
			},
			{
				media: '(prefers-color-scheme: dark)',
				color: isSepiaTheme
					? token('colors.sepia.950')
					: token('colors.neutral.800'),
			},
		],
	}
}
