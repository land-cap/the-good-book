import '~/index.css'
import { NavBar } from '~/components/molecules/NavBar'
import { Page } from '~/components/Page'
import { styled } from '../../styled-system/jsx'
import { GeistMono, GeistSans } from 'geist/font'
import { Footer } from '~/components/molecules/Footer'

export const metadata = {
	title: 'The Good Book',
	description: 'Read the Bible without distractions.',
	icons: [{ rel: 'icon', url: '/favicon.png' }],
}

const AppShell = styled('div', {
	base: {
		flexFlow: 'column nowrap',
		height: 'fit-content',
		minHeight: '100vh',
		textStyle: 'body',
	},
})

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
		<AppShell>
			<NavBar />
			<Page>{children}</Page>
			<Footer />
		</AppShell>
	</html>
)

export default RootLayout
