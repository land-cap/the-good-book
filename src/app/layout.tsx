import '~/index.css'
import { DM_Mono, DM_Sans } from 'next/font/google'

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

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en" className={`${dmSans.variable} ${dmMono.variable}`}>
		<body>{children}</body>
	</html>
)

export default RootLayout
