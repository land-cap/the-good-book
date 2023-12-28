import { getBookWithCache, getChapterWithCache } from '~/db'
import { ChapterContentContainer, renderChapterContent } from './chapterContent'
import { Toolbar } from './components/Toolbar'
import { READER_MODE, type TReaderPageParams } from './ReaderPage.types'

export const ReaderPage = async ({ params }: { params: TReaderPageParams }) => {
	const { bookCode, chapter, readerMode } = params

	const isStudyMode = readerMode === READER_MODE.Study

	const chapterData = await getChapterWithCache(
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

	return (
		<>
			<ChapterContentContainer>{chapterContent}</ChapterContentContainer>
			<Toolbar
				bookName={book.name}
				bookCode={bookCode}
				chapter={Number(chapter)}
				readerMode={readerMode}
			/>
		</>
	)
}
