import { type ReactNode } from 'react'

import { getBookListWithCache } from '~/db'

import { Footer } from './_components/Footer'
import { Header } from './_components/Header'
import { ReaderControls } from './_components/ReaderControls'

const Layout = async ({ children }: { children: ReactNode }) => {
	const bookList = await getBookListWithCache()

	return (
		<>
			<Header />
			{children}
			<Footer />
			<ReaderControls bookList={bookList} />
		</>
	)
}

export default Layout
