import { getChapterDataObject } from '~/_pages/ReaderPage/ChapterContent/chapterDataProcessing/getChapterDataObject'
import { ReaderNavButton } from '~/_pages/ReaderPage/components/ReaderNavButton'
import { getBookWithCache, getChapterWithCache } from '~/db'
import { ChapterContentContainer } from './ChapterContent/ChapterContentContainer'
import { NavBar } from './components/NavBar'
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
				<div className="invisible sticky top-0 flex h-screen flex-col items-center justify-center [grid-area:margin-left] sm:visible">
					<ReaderNavButton
						href={`/${readerMode}/${bookCode}/${Number(chapter) - 1}`}
						direction="left"
					/>
				</div>
				<div className="invisible sticky top-0 flex h-screen flex-col items-center justify-center [grid-area:margin-right] sm:visible">
					<ReaderNavButton
						href={`/${readerMode}/${bookCode}/${Number(chapter) + 1}`}
						direction="right"
					/>
				</div>
				<ChapterContentContainer
					chapterContentHtml={chapterContentHtml}
					isStudyMode={isStudyMode}
				/>
			</ReaderPageContainer>
		</>
	)
}
