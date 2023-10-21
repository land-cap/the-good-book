import '~/styles/globals.css'

import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({
	subsets: ['latin-ext'],
})

export const metadata = {
	title: 'The Good Book',
	description: 'Read the Bible without distractions.',
	icons: [{ rel: 'icon', url: '/favicon.png' }],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={dmSans.className}>{children}</body>
		</html>
	)
}
