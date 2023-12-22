import { getChapterDataObject } from '~/_pages/ReaderPage/ChapterContent/chapterDataProcessing/getChapterDataObject'
import { getBookWithCache, getChapterWithCache } from '~/db'
import { ChapterContentContainer } from './ChapterContent/ChapterContentContainer'
import { NavBar } from './components/NavBar'
import { ReaderNavButtons } from './components/ReaderNavButtons'
import { ReaderPageContainer } from './components/ReaderPageContainer'
import { READER_MODE, type ReaderPageParams } from './ReaderPage.types'

export const ReaderPage = async ({ params }: { params: ReaderPageParams }) => {
	const { bookCode, chapter, readerMode } = params

	const isStudyMode = readerMode === READER_MODE.Study

	const chapterData = await getChapterWithCache(
		bookCode.toUpperCase(),
		Number(chapter),
	)

	if (!chapterData?.content) {
		throw new Error('No chapter data')
	}

	const chapterContentHtml = getChapterDataObject(chapterData.content)

	const book = await getBookWithCache(bookCode.toUpperCase())

	if (!book) {
		throw new Error('No book data')
	}

	return (
		<>
			<NavBar bookName={book.name} chapter={chapter} />
			<ReaderPageContainer>
				<ChapterContentContainer
					chapterContentHtml={chapterContentHtml}
					isStudyMode={isStudyMode}
				/>
				<ReaderNavButtons
					bookCode={bookCode}
					chapter={chapter}
					readerMode={readerMode}
				/>
			</ReaderPageContainer>
		</>
	)
}
