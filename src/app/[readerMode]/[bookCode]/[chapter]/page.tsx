import { range } from 'ramda'

import {
	READER_MODE,
	type TReaderPageParams,
} from '~/_pages/ReaderPage/ReaderPage.types'
import { getBookList } from '~/db'

export const generateStaticParams = async (): Promise<TReaderPageParams[]> => {
	const bookList = await getBookList()

	return bookList.flatMap((book) => {
		const bookCode = book.code

		return range(1)(book.chapter_count + 1).map((chapter) => ({
			bookCode,
			chapter: chapter.toString(),
			readerMode: READER_MODE.Study,
		}))
	})
}

export { ReaderPage as default } from '~/_pages'
