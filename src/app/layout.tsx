import { DM_Mono, DM_Sans } from 'next/font/google'
import { cx } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { macrogrid } from 'styled-system/patterns'
import { Footer } from '~/components/molecules/Footer'
import { Header } from '~/components/molecules/Header'
import '~/index.css'

const fontSans = DM_Sans({
	variable: '--font-sans',
	subsets: ['latin-ext'],
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
})

const fontMono = DM_Mono({
	variable: '--font-mono',
	subsets: ['latin-ext'],
	weight: ['300', '400', '500'],
	style: ['italic', 'normal'],
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
})

export const metadata = {
	title: 'The Good Book',
	description: 'Read the Bible without distractions.',
	icons: [{ rel: 'icon', url: '/favicon.png' }],
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
		<styled.body
			className={cx(
				macrogrid({
					gridAutoRows: 'min-content',
					fontSize: 'base',
					color: 'fg',
					h: 'fit',
					background: 'bg.surface',
					_dark: { color: 'fg.muted' },
				}),
			)}
		>
			<Header />
			{children}
			<Footer />
		</styled.body>
	</html>
)

export default RootLayout
