import '~/index.css'

import { type Viewport } from 'next'
import { DM_Mono, DM_Sans } from 'next/font/google'
import { type ReactNode } from 'react'
import { macrogrid } from 'styled-system/patterns'

import { ReaderControls } from '~/components'
import { Footer } from '~/components/molecules/Footer'
import { Header } from '~/components/molecules/Header'
import { getBookList } from '~/db'

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
		'apple-mobile-web-app-status-bar-style': 'default',
	},
	title: 'The Good Book',
}

export const viewport: Viewport = {
	initialScale: 1,
	viewportFit: 'cover',
}

const RootLayout = async ({ children }: { children: ReactNode }) => {
	const bookList = await getBookList()

	return (
		<html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
			<body
				className={macrogrid({
					_osDark: { color: 'fg.muted' },
					background: 'bg.canvas',
					color: 'fg',
					fontSize: 'base',
					gridTemplateRows: '1fr min-content',
					h: '100dvh',
					overflow: 'hidden',
				})}
			>
				<div
					className={macrogrid({
						gridAutoRows: 'min-content',
						gridColumn: 'fullbleed',
						gridRow: '1fr',
						h: 'full',
						overflowY: 'scroll',
					})}
				>
					<Header />
					{children}
					<Footer />
				</div>
				<ReaderControls bookList={bookList} />
			</body>
		</html>
	)
}

export default RootLayout
