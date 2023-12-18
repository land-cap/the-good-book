import { DM_Mono, DM_Sans } from 'next/font/google'
import { Footer } from '~/components/molecules/Footer'
import '~/index.css'

const fontSans = DM_Sans({
	variable: '--font-sans',
	subsets: ['latin-ext'],
	axes: ['opsz'],
})

const fontMono = DM_Mono({
	variable: '--font-mono',
	subsets: ['latin-ext'],
	weight: ['300', '400', '500'],
	style: ['italic', 'normal'],
})

export const metadata = {
	title: 'The Good Book',
	description: 'Read the Bible without distractions.',
	icons: [{ rel: 'icon', url: '/favicon.png' }],
}

const appShellCls =
	'relative flex-col h-fit min-h-screen text-base bg-bgSurface font-normal text-fg dark:text-fgMuted'

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
		<body className={appShellCls}>
			{children}
			<Footer />
		</body>
	</html>
)

export default RootLayout
