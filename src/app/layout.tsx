import { DM_Mono, DM_Sans } from 'next/font/google'
import { NavBar } from '~/_pages/ReaderPage/components/NavBar'
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
	'relative h-fit min-h-screen text-base bg-bgSurface font-normal text-fg dark:text-fgMuted grid grid-flow-row grid-cols-[0_1fr_0] sm:grid-cols-[[fullbleed-start_margin-left-start]_1fr_[margin-left-end_content-start]_minmax(auto,min(calc(75%_-_4rem),calc(42rem_-_4rem)))_[content-end_margin-right-start]_1fr_[margin-right-end_fullbleed-end]] gap-x-8'

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
		<body className={appShellCls}>
			<NavBar />
			{children}
			<Footer />
		</body>
	</html>
)

export default RootLayout
