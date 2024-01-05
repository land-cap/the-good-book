import localFont from 'next/font/local'

export const fontFranklin = localFont({
	src: [
		{
			path: './franklin-regular/franklin-regular.woff',
			weight: '400',
		},
		{
			path: './franklin-regular-italic/franklin-regular-italic.woff',
			style: 'italic',
			weight: '400',
		},
		{
			path: './franklin-demi/franklin-demi.woff',
			weight: '800',
		},
	],
	variable: '--font-sans',
})
