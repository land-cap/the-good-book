import { getChapterDataObject } from '~/_pages/ReaderPage/ChapterContent/chapterDataProcessing/getChapterDataObject'
import { MobileToolBar } from '~/_pages/ReaderPage/components/MobileToolBar'
import { getBookWithCache, getChapterWithCache } from '~/db'
import { ChapterContentContainer } from './ChapterContent/ChapterContentContainer'
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
		</>
	)
}
