import { NavBar } from '~/_pages/ReaderPage/components/NavBar'
import { ReaderNavButtons } from '~/_pages/ReaderPage/components/ReaderNavButtons'
import { getBookWithCache, getChapterWithCache } from '~/db'
import { getChapterOMFromHTMLString } from './chapterContentData/getChapterOMFromHTMLString'
import { ChapterContent } from './components/ChapterContent'
import { ReaderPageContainer } from './components/ReaderPageContainer'
import { READER_MODE, type ReaderPageParams } from './ReaderPage.types'
import { ReaderStateSetup } from './ReaderState.setup'

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

	const chapterContentHtml = getChapterOMFromHTMLString(
		chapterData.content,
		isStudyMode,
	)

	const book = await getBookWithCache(bookCode.toUpperCase())

	if (!book) {
		throw new Error('No book data')
	}

	return (
		<>
			<ReaderStateSetup
				bookName={book.name}
				chapter={Number(chapter)}
				readerMode={readerMode}
			/>
			<NavBar bookName={book.name} chapter={chapter} />
			<ReaderPageContainer>
				<ChapterContent
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
