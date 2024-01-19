import { range } from 'ramda'

import { type TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import { getBookListWithCache } from '~/db'

export const generateStaticParams = async (): Promise<TReaderPageParams[]> => {
	if (process.env.ENVIRONMENT !== 'prod') {
		return []
	}

	const bookList = await getBookListWithCache()

	return bookList.flatMap((book) => {
		const bookCode = book.code

		return range(1)(book.chapter_count + 1).map((chapter) => ({
			bookCode,
			chapter: chapter.toString(),
		}))
	})
}

export { ReaderPage as default } from '~/_pages'
