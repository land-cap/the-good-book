import { DM_Mono, DM_Sans } from 'next/font/google'
import { macrogrid } from 'styled-system/patterns'
import { Footer } from '~/components/molecules/Footer'
import { Header } from '~/components/molecules/Header'
import '~/index.css'

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
	title: 'The Good Book',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
		<body
			className={macrogrid({
				_osDark: { color: 'fg.muted' },
				background: 'bg.surface',
				color: 'fg',
				fontSize: 'base',
				gridAutoRows: 'min-content',
				h: 'fit',
			})}
		>
			<Header />
			{children}
			<Footer />
		</body>
	</html>
)

export default RootLayout
