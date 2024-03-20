import { getChapterWithCache, getSingleChapterBookList } from '~/db'
import {
	getBookAbbrToName,
	getBookNameByCode,
	getBookNameToCode,
} from '~/organisms'

import { ChapterContentContainer, renderChapterContent } from './chapterContent'
import { UseReaderHotKeys } from './UseReaderHotKeys'

export type TReaderPageParams = {
	bookCode: string
	chapter: string
}

export const ReaderPage = async ({ params }: { params: TReaderPageParams }) => {
	const { bookCode, chapter } = params

	const chapterData = await getChapterWithCache(bookCode, Number(chapter))

	if (!chapterData?.content) {
		throw new Error('No chapter data')
	}

	const bookName = await getBookNameByCode(bookCode)
	const bookAbbrToName = await getBookAbbrToName()
	const bookNameToCode = await getBookNameToCode()
	const singleChapterBookList = await getSingleChapterBookList()

	const chapterContent = renderChapterContent(
		bookName,
		bookAbbrToName,
		bookNameToCode,
		singleChapterBookList,
	)(chapterData.content)

	return (
		<>
			<UseReaderHotKeys />
			<ChapterContentContainer>{chapterContent}</ChapterContentContainer>
		</>
	)
}
