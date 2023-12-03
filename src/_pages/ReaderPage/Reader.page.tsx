import Link from 'next/link'
import { NavBar } from '~/_pages/ReaderPage/components/NavBar'
import { getBookWithCache, getChapterWithCache } from '~/db'
import { ChapterContent } from './components/ChapterContent'
import { ChapterTitle } from './components/ChapterTitle'
import { ReaderPageContainer } from './components/ReaderPageContainer'
import { getNormalizedChapterContent } from './getNormalizedChapterContent'
import { READER_MODE, type ReaderPageParams } from './ReaderPage.types'
import { ReaderStateSetup } from './ReaderState.setup'

export const ReaderPage = async ({ params }: { params: ReaderPageParams }) => {
	const { bookCode, chapter, readerMode } = params

	const isStudyMode = readerMode === READER_MODE.Study

	const chapterData = await getChapterWithCache(bookCode, Number(chapter))

	if (!chapterData?.content) {
		throw new Error('No chapter data')
	}

	const chapterContentHtml = getNormalizedChapterContent(
		chapterData.content,
		isStudyMode,
	)

	const book = await getBookWithCache(bookCode)

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
			<ReaderPageContainer isStudyMode={isStudyMode}>
				<ChapterTitle bookName={book.name} chapter={chapter} />
				<ChapterContent
					chapterContentHtml={chapterContentHtml}
					isStudyMode={isStudyMode}
				/>
			</ReaderPageContainer>
			<Link href={`/${bookCode}/${Number(chapter) - 1}/${readerMode}`}>
				Previous chapter
			</Link>
			<Link href={`/${bookCode}/${Number(chapter) + 1}/${readerMode}`}>
				Next chapter
			</Link>
		</>
	)
}
