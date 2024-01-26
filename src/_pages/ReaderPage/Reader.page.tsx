import { UseReaderHotKeys } from '~/_pages/ReaderPage/UseReaderHotKeys'
import { getChapterWithCache } from '~/db'

import { ChapterContentContainer, renderChapterContent } from './chapterContent'
import { type TReaderPageParams } from './ReaderPage.types'

export const ReaderPage = async ({ params }: { params: TReaderPageParams }) => {
	const { bookCode, chapter } = params

	const chapterData = await getChapterWithCache(bookCode, Number(chapter))

	if (!chapterData?.content) {
		throw new Error('No chapter data')
	}

	const chapterContent = renderChapterContent(chapterData.content)

	return (
		<>
			<UseReaderHotKeys />
			<ChapterContentContainer>{chapterContent}</ChapterContentContainer>
		</>
	)
}
