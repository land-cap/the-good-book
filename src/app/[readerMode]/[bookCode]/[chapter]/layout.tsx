import { type ReactNode } from 'react'

import { Footer, Header } from '~/components'
import { getBookList } from '~/db'

import { PageContainer } from './_components/PageContainer'
import { ReaderControls } from './_components/ReaderControls'

const Layout = async ({ children }: { children: ReactNode }) => {
	const bookList = await getBookList()

	return (
		<>
			<PageContainer>
				<Header />
				{children}
				<Footer />
			</PageContainer>
			<ReaderControls bookList={bookList} />
		</>
	)
}

export default Layout
