import type { ReactNode } from 'react'

import { getBookListWithCache } from '~/db'
import { BottomToolbar, TopToolbar, VerseDetailsMenuRoot } from '~/organisms'

import { Footer } from './Footer'
import { UseRestorePrevSessionChapter } from './UseRestorePrevSessionChapter'
import { UseSetUpReaderState } from './UseSetUpReaderState'

export const ReaderLayout = async ({ children }: { children: ReactNode }) => {
	const bookList = await getBookListWithCache()

	return (
		<>
			<UseRestorePrevSessionChapter />
			<UseSetUpReaderState bookList={bookList} />
			<TopToolbar />
			{children}
			<BottomToolbar bookList={bookList} />
			<VerseDetailsMenuRoot bookList={bookList} />
			<Footer />
		</>
	)
}
