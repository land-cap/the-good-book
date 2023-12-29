import { getChapterWithCache } from '~/db'

import { ChapterContentContainer, renderChapterContent } from './chapterContent'
import { READER_MODE, type TReaderPageParams } from './ReaderPage.types'

export const ReaderPage = async ({ params }: { params: TReaderPageParams }) => {
	const { bookCode, chapter, readerMode } = params

	const isStudyMode = readerMode === READER_MODE.Study

	const chapterData = await getChapterWithCache(bookCode, Number(chapter))

	if (!chapterData?.content) {
		throw new Error('No chapter data')
	}

	const chapterContent = renderChapterContent(isStudyMode)(chapterData.content)

	return <ChapterContentContainer>{chapterContent}</ChapterContentContainer>
}
