import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { NavBar } from '~/_pages/ReaderPage/components/NavBar'
import { setPageWidthCls } from '~/components'
import { withCapsize } from '~/components/withCapsize'
import { getBookWithCache, getChapterWithCache } from '~/db'
import { getChapterOMFromHTMLString } from './chapterContentData/getChapterOMFromHTMLString'
import { ChapterContent } from './components/ChapterContent'
import { ChapterTitle } from './components/ChapterTitle'
import { ReaderPageContainer } from './components/ReaderPageContainer'
import { READER_MODE, type ReaderPageParams } from './ReaderPage.types'
import { ReaderStateSetup } from './ReaderState.setup'

const Link$ = withCapsize(Link)

export const ReaderPage = async ({ params }: { params: ReaderPageParams }) => {
	const { bookCode, chapter, readerMode } = params

	const isStudyMode = readerMode === READER_MODE.Study

	const chapterData = await getChapterWithCache(bookCode, Number(chapter))

	if (!chapterData?.content) {
		throw new Error('No chapter data')
	}

	const chapterContentHtml = getChapterOMFromHTMLString(
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
			<ReaderPageContainer>
				<ChapterTitle bookName={book.name} chapter={chapter} />
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
					href={`/${bookCode}/${Number(chapter) - 1}/${readerMode}`}
				>
					Previous chapter
				</Link$>
				<Link$
					fontSize="base"
					href={`/${bookCode}/${Number(chapter) + 1}/${readerMode}`}
				>
					Next chapter
				</Link$>
			</div>
		</>
	)
}
