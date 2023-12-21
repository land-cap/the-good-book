import { twMerge } from 'tailwind-merge'
import { type ChapterOM } from '~/_pages/ReaderPage/chapterDataProcessing/getChapterObjectModel'
import { renderChapterContent } from '~/_pages/ReaderPage/chapterDataProcessing/renderChapterContent'
import './ChapterContent.css'

export const ChapterContentContainer = ({
	chapterObjectModel,
	isStudyMode,
}: {
	chapterObjectModel: ChapterOM
	isStudyMode: boolean
}) => (
	<div
		className={twMerge(
			'reader',
			'mt-reader-gap md:mt-reader-gap-md text-base md:text-lg leading-[2em] md:leading-[2.25em]',
		)}
	>
		{renderChapterContent(chapterObjectModel, isStudyMode)}
	</div>
)
