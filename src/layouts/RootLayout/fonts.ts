import localFont from 'next/font/local'

export const fontSans = localFont({
	src: [
		{ path: './fonts/Geist-Regular.woff2', weight: '400' },
		{ path: './fonts/Geist-Bold.woff2', weight: '700' },
	],
	variable: '--font-sans',
})
