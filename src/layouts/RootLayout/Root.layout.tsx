import localFont from 'next/font/local'
import type { ReactNode } from 'react'
import { cx } from 'styled-system/css'
import { macrogrid } from 'styled-system/patterns'

import { RootProviders } from '~/app/_components/RootProviders'
import { getBookListWithCache } from '~/db'
import { PageBottomReference } from '~/layouts/RootLayout/PageBottomReference'
import { BottomToolbar, ShowControlsFAB, TopToolbar } from '~/organisms'

const fontGeist = localFont({
	src: [
		{ path: './fonts/Geist-Regular.woff2', weight: '400' },
		{
			path: './fonts/Geist-Regular.otf',
			weight: '400',
		},
		{ path: './fonts/Geist-Bold.woff2', weight: '700' },
		{ path: './fonts/Geist-Bold.otf', weight: '700' },
	],
	variable: '--font-sans',
})

const fontGeistMono = localFont({
	src: [
		{ path: './fonts/GeistMono-Regular.woff2', weight: '400' },
		{
			path: './fonts/GeistMono-Regular.otf',
			weight: '400',
		},
		{ path: './fonts/GeistMono-Bold.woff2', weight: '700' },
		{ path: './fonts/GeistMono-Bold.otf', weight: '700' },
	],
	variable: '--font-mono',
})

export const RootLayout = async ({ children }: { children: ReactNode }) => {
	const bookList = await getBookListWithCache()

	return (
		<RootProviders>
			<html
				lang="en"
				className={cx(fontGeist.variable, fontGeistMono.variable)}
			>
				<body
					className={macrogrid({
						_osDark: { color: 'fg.muted' },
						background: 'bg.canvas',
						color: 'fg',
						fontSize: 'sm',
						gridTemplateRows: 'min-content 1fr min-content',
						minH: '100dvh',
						overscrollBehavior: 'contain',
						sm: { fontSize: 'md' },
					})}
				>
					<TopToolbar />
					{children}
					<BottomToolbar bookList={bookList} />
					<PageBottomReference />
					<ShowControlsFAB />
				</body>
			</html>
		</RootProviders>
	)
}
