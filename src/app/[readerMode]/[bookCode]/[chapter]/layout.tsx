import { type ReactNode } from 'react'

import { Footer, Header } from '~/components'
import { getBookListWithCache } from '~/db'

import { ReaderControls } from './_components/ReaderControls'
import { ReaderPageContainer } from './_components/ReaderPageContainer'

const Layout = async ({ children }: { children: ReactNode }) => {
	const bookList = await getBookListWithCache()

	return (
		<>
			<ReaderPageContainer>
				<Header />
				{children}
				<Footer />
			</ReaderPageContainer>
			<ReaderControls bookList={bookList} />
		</>
	)
}

export default Layout
