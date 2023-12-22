import { getChapterDataObject } from '~/_pages/ReaderPage/ChapterContent/chapterDataProcessing/getChapterDataObject'
import { MobileToolBar } from '~/_pages/ReaderPage/components/MobileToolBar'
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

	const prevChapterHref = `/${readerMode}/${bookCode}/${Number(chapter) - 1}`
	const nextChapterHref = `/${readerMode}/${bookCode}/${Number(chapter) + 1}`

	return (
		<>
			<NavBar bookName={book.name} chapter={chapter} />
			<ReaderPageContainer>
				<div className="sticky top-0 hidden h-screen flex-col items-center justify-center [grid-area:margin-left] sm:flex">
					<ReaderNavButton href={prevChapterHref} direction="left" />
				</div>
				<div className="sticky top-0 hidden h-screen flex-col items-center justify-center [grid-area:margin-right] sm:flex">
					<ReaderNavButton href={nextChapterHref} direction="right" />
				</div>
				<ChapterContentContainer
					chapterContentHtml={chapterContentHtml}
					isStudyMode={isStudyMode}
				/>
				<MobileToolBar
					prevChapterHref={prevChapterHref}
					nextChapterHref={nextChapterHref}
					chapter={chapter}
					bookName={book.name}
				/>
			</ReaderPageContainer>
		</>
	)
}
