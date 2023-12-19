import { twMerge } from 'tailwind-merge'
import { type ChapterOM } from '~/_pages/ReaderPage/ChapterContent/chapterDataProcessing/getChapterDataObject'
import { renderChapterContent } from '~/_pages/ReaderPage/ChapterContent/chapterDataProcessing/renderChapterContent'
import './ChapterContent.css'

export const ChapterContent = ({
	chapterContentHtml,
	isStudyMode,
}: {
	chapterContentHtml: ChapterOM
	isStudyMode: boolean
}) => (
	<div
		className={twMerge(
			'reader',
			'mt-reader-gap md:mt-reader-gap-md text-base md:text-lg leading-[2em] md:leading-[2.25em]',
		)}
	>
		{renderChapterContent(chapterContentHtml, isStudyMode)}
	</div>
)
