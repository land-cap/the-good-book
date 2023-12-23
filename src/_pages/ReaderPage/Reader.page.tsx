import { renderChapterContent } from 'src/_pages/ReaderPage/ChapterContent/renderChapterContent'
import { getBookWithCache, getChapterWithCache } from '~/db'
import { withPerformanceLogAsync } from '~/helpers'
import { ChapterContentContainer } from './ChapterContent/ChapterContentContainer'
import { Toolbar } from './components/Toolbar'
import { READER_MODE, type ReaderPageParams } from './ReaderPage.types'

export const ReaderPage = async ({ params }: { params: ReaderPageParams }) => {
	const { bookCode, chapter, readerMode } = params

	const isStudyMode = readerMode === READER_MODE.Study

	const chapterData = await withPerformanceLogAsync(getChapterWithCache)(
		bookCode.toUpperCase(),
		Number(chapter),
	)

	if (!chapterData?.content) {
		throw new Error('No chapter data')
	}

	const chapterContent = renderChapterContent(isStudyMode)(chapterData.content)

	const book = await getBookWithCache(bookCode.toUpperCase())

	if (!book) {
		throw new Error('No book data')
	}

	const prevChapterHref = `/${readerMode}/${bookCode}/${Number(chapter) - 1}`
	const nextChapterHref = `/${readerMode}/${bookCode}/${Number(chapter) + 1}`

	return (
		<>
			<ChapterContentContainer>{chapterContent}</ChapterContentContainer>
			<Toolbar
				prevChapterHref={prevChapterHref}
				nextChapterHref={nextChapterHref}
				chapter={chapter}
				bookName={book.name}
			/>
		</>
	)
}
