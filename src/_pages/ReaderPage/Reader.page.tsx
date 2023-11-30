import { getBookWithCache, getChapterWithCache } from '~/db'
import { ChapterContent } from './components/ChapterContent'
import { getNormalizedChapterContent } from './getNormalizedChapterContent'
import { ReaderPageContainer } from '~/_pages/ReaderPage/components/ReaderPageContainer'
import { ChapterTitle } from '~/_pages/ReaderPage/components/ChapterTitle'

export const ReaderPage = async ({
	params,
}: {
	params: {
		bookCode: string
		chapter: string
		mode: 'study' | 'read'
	}
}) => {
	const { bookCode, chapter, mode } = params

	const isStudyMode = mode === 'study'

	const chapterData = await getChapterWithCache(bookCode, Number(chapter))

	if (chapterData?.content) {
		const chapterContentHtml = getNormalizedChapterContent(
			chapterData.content,
			isStudyMode,
		)

		const book = await getBookWithCache(bookCode)

		return (
			<ReaderPageContainer isStudyMode={isStudyMode}>
				{book?.name ? (
					<ChapterTitle bookName={book.name} chapter={chapter} />
				) : null}
				<ChapterContent
					chapterContentHtml={chapterContentHtml}
					isStudyMode={isStudyMode}
				/>
			</ReaderPageContainer>
		)
	}
	throw new Error('No chapter data')
}
