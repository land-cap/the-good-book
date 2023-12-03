import { DM_Mono, DM_Sans } from 'next/font/google'
import { Footer } from '~/components/molecules/Footer'
import '~/index.css'

const dmSans = DM_Sans({
	subsets: ['latin-ext'],
	variable: '--font-sans',
	axes: ['opsz'],
})

const dmMono = DM_Mono({
	subsets: ['latin-ext'],
	weight: ['300', '400', '500'],
	variable: '--font-mono',
})

export const metadata = {
	title: 'The Good Book',
	description: 'Read the Bible without distractions.',
	icons: [{ rel: 'icon', url: '/favicon.png' }],
}

const appShellCls = 'relative flex-col h-fit min-h-screen text-base'

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en" className={`${dmSans.variable} ${dmMono.variable}`}>
		<body className={appShellCls}>
			{children}
			<Footer />
		</body>
	</html>
)

export default RootLayout
