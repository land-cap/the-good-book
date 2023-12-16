import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { NavBar } from '~/_pages/ReaderPage/components/NavBar'
import { setPageWidthCls } from '~/components'
import { withCapsize } from '~/components/withCapsize'
import { getBookWithCache, getChapterWithCache } from '~/db'
import { ChapterContent } from './components/ChapterContent'
import { ReaderPageContainer } from './components/ReaderPageContainer'
import { getNormalizedChapterContent } from './getNormalizedChapterContent'
import { READER_MODE, type ReaderPageParams } from './ReaderPage.types'

const Link$ = withCapsize(Link)

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
			<NavBar bookName={book.name} chapter={chapter} />
			<ReaderPageContainer>
				<ChapterContent
					chapterContentHtml={chapterContentHtml}
					isStudyMode={isStudyMode}
				/>
			</ReaderPageContainer>
			<div
				className={twMerge(
					setPageWidthCls,
					'flex justify-between my-8 md:my-12 font-bold underline',
				)}
			>
				<Link$
					fontSize="base"
					href={`/${readerMode}/${bookCode}/${Number(chapter) - 1}`}
				>
					Previous chapter
				</Link$>
				<Link$
					fontSize="base"
					href={`/${readerMode}/${bookCode}/${Number(chapter) + 1}`}
				>
					Next chapter
				</Link$>
			</div>
		</>
	)
}
