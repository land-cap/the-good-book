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
	}
}) => {
	const { bookCode, chapter } = params

	const chapterData = await getChapterWithCache(bookCode, Number(chapter))

	if (chapterData?.content) {
		const chapterContentHtml = getNormalizedChapterContent(chapterData.content)

		const book = await getBookWithCache(bookCode)

		return (
			<ReaderPageContainer>
				{book?.name ? (
					<ChapterTitle bookName={book.name} chapter={chapter} />
				) : null}
				<ChapterContent chapterContentHtml={chapterContentHtml} />
			</ReaderPageContainer>
		)
	}
	throw new Error('No chapter data')
}
