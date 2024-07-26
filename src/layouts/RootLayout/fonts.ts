import {
	Inter,
	Lexend,
	Roboto_Condensed,
	Source_Serif_4,
} from 'next/font/google'
import localFont from 'next/font/local'

export const fontSans = localFont({
	src: [
		{ path: './fonts/Geist-Regular.woff2', weight: '400' },
		{
			path: './fonts/Geist-Regular.otf',
			weight: '400',
		},
		{ path: './fonts/Geist-Bold.woff2', weight: '700' },
		{ path: './fonts/Geist-Bold.otf', weight: '700' },
	],
	variable: '--font-sans',
})

export const fontMono = localFont({
	src: [
		{ path: './fonts/GeistMono-Regular.woff2', weight: '400' },
		{
			path: './fonts/GeistMono-Regular.otf',
			weight: '400',
		},
		{ path: './fonts/GeistMono-UltraBlack.woff2', weight: '700' },
		{ path: './fonts/GeistMono-UltraBlack.otf', weight: '700' },
	],
	variable: '--font-mono',
})

export const fontClean = Inter({
	weight: ['400', '700'],
	style: ['normal'],
	display: 'swap',
	variable: '--font-clean',
	subsets: ['latin', 'latin-ext'],
})

export const fontDyslexic = Lexend({
	weight: ['400', '700'],
	display: 'swap',
	variable: '--font-dyslexic',
	subsets: ['latin', 'latin-ext'],
})

export const fontCondensed = Roboto_Condensed({
	weight: ['400', '700'],
	style: ['normal'],
	display: 'swap',
	variable: '--font-condensed',
	subsets: ['latin', 'latin-ext'],
})

export const fontOldStyle = Source_Serif_4({
	weight: ['400', '700'],
	display: 'swap',
	variable: '--font-old-style',
	subsets: ['latin', 'latin-ext'],
})
