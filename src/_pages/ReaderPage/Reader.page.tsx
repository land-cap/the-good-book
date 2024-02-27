import { UseReaderHotKeys } from '~/_pages/ReaderPage/UseReaderHotKeys'
import { getChapterWithCache, getSingleChapterBookList } from '~/db'
import { getBookAbbrToName } from '~/organisms/VerseDetailsMenu/getBookAbbrToName'
import { getBookNameByCode } from '~/organisms/VerseDetailsMenu/getBookNameByCode'
import { getBookNameToCode } from '~/organisms/VerseDetailsMenu/getBookNameToCode'

import { ChapterContentContainer, renderChapterContent } from './chapterContent'
import { type TReaderPageParams } from './ReaderPage.types'

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
