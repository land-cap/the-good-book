import { twMerge } from 'tailwind-merge'
import { type ChapterOM } from '~/_pages/ReaderPage/ChapterContent/chapterDataProcessing/getChapterDataObject'
import { renderChapterContent } from '~/_pages/ReaderPage/ChapterContent/chapterDataProcessing/renderChapterContent'
import styles from './ChapterContentContainer.module.css'

export const ChapterContentContainer = ({
	chapterContentHtml,
	isStudyMode,
}: {
	chapterContentHtml: ChapterOM
	isStudyMode: boolean
}) => (
	<div
		className={twMerge(
			styles.chapterContentContainer,
			'col-[content] mt-reader-gap md:mt-reader-gap-md text-base md:text-lg leading-[2em] md:leading-[2.25em]',
		)}
	>
		{renderChapterContent(chapterContentHtml, isStudyMode)}
	</div>
)
