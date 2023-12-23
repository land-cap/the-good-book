import { DM_Mono, DM_Sans } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import { macroGridCls } from '~/components'
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

const appShellCls = twMerge(
	'[grid-auto-rows:min-content] h-fit min-h-screen text-base bg-bgSurface font-normal text-fg dark:text-fgMuted',
	macroGridCls,
)

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
		<body className={appShellCls}>
			<Header />
			{children}
			<Footer />
		</body>
	</html>
)

export default RootLayout
