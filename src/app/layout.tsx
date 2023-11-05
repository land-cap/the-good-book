import '~/index.css'
import { DM_Mono, DM_Sans } from 'next/font/google'
import { flex } from '../../styled-system/patterns'
import { NavBar } from '~/components/molecules/NavBar'
import { Page } from '~/components/Page'

const dmSans = DM_Sans({
	subsets: ['latin-ext'],
	variable: '--font-sans',
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

const appShellStyle = flex({
	flexFlow: 'column nowrap',
	height: 'fit-content',
	minHeight: '100vh',
	textStyle: 'body',
})

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en" className={`${dmSans.variable} ${dmMono.variable}`}>
		<body className={appShellStyle}>
			<NavBar />
			<Page>{children}</Page>
		</body>
	</html>
)

export default RootLayout
