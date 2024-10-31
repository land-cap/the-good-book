import type { ReactNode } from 'react'

import { getBookListWithCache } from '~/db'
import { BottomToolbar, TopToolbar, VerseDetailsMenuRoot } from '~/organisms'

import { Footer } from './lib/Footer'
import { UseRestorePrevSessionChapter } from './lib/UseRestorePrevSessionChapter'
import { UseSetUpReaderState } from './lib/UseSetUpReaderState'

const ReaderLayout = async ({ children }: { children: ReactNode }) => {
	const bookList = await getBookListWithCache()

	return (
		<>
			<UseRestorePrevSessionChapter />
			<UseSetUpReaderState bookList={bookList} />
			<TopToolbar />
			{children}
			<BottomToolbar />
			<VerseDetailsMenuRoot bookList={bookList} />
			<Footer />
		</>
	)
}

export default ReaderLayout
