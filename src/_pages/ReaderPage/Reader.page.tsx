import { getBookWithCache, getChapterWithCache } from '~/db'
import { ChapterContent } from './components/ChapterContent'
import { getNormalizedChapterContent } from './getNormalizedChapterContent'
import { ReaderPageContainer } from '~/_pages/ReaderPage/components/ReaderPageContainer'
import { ChapterTitle } from '~/_pages/ReaderPage/components/ChapterTitle'
import { ReaderStateSetup } from './ReaderState.setup'
import {
	READER_MODE,
	type ReaderPageParams,
} from '~/_pages/ReaderPage/ReaderPage.types'

export const ReaderPage = async ({ params }: { params: ReaderPageParams }) => {
	const { bookCode, chapter, mode } = params

	const isStudyMode = mode === READER_MODE.Study

	const chapterData = await getChapterWithCache(bookCode, Number(chapter))

	if (chapterData?.content) {
		const chapterContentHtml = getNormalizedChapterContent(
			chapterData.content,
			isStudyMode,
		)

		const book = await getBookWithCache(bookCode)

		return (
			<>
				<ReaderStateSetup />
				<ReaderPageContainer isStudyMode={isStudyMode}>
					{book?.name ? (
						<ChapterTitle bookName={book.name} chapter={chapter} />
					) : null}
					<ChapterContent
						chapterContentHtml={chapterContentHtml}
						isStudyMode={isStudyMode}
					/>
				</ReaderPageContainer>
			</>
		)
	}
	throw new Error('No chapter data')
}
