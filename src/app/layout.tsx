import '~/index.css'
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({
	subsets: ['latin-ext'],
})

export const metadata = {
	title: 'The Good Book',
	description: 'Read the Bible without distractions.',
	icons: [{ rel: 'icon', url: '/favicon.png' }],
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en">
		<body className={dmSans.className}>{children}</body>
	</html>
)

export default RootLayout
