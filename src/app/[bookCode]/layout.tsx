import { type ReactNode } from 'react'

import { TopToolbar } from '~/app/[bookCode]/_components/TopToolbar'
import { getBookListWithCache } from '~/db'

import { BottomToolbar } from './_components/BottomToolbar'
import { Footer } from './_components/Footer'

const Layout = async ({ children }: { children: ReactNode }) => {
	const bookList = await getBookListWithCache()

	return (
		<>
			<TopToolbar />
			{children}
			<Footer />
			<BottomToolbar bookList={bookList} />
		</>
	)
}

export default Layout
