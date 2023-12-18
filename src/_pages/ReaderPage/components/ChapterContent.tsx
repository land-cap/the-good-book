'use client'

import { twMerge } from 'tailwind-merge'
import { type ChapterOM } from '../chapterContentData/getChapterObjectModel'
import { renderChapterContent } from '../chapterContentData/renderChapterContent'

export const ChapterContent = ({
	chapterContentHtml,
	isStudyMode,
}: {
	chapterContentHtml: ChapterOM
	isStudyMode: boolean
}) => (
	<div
		className={twMerge(
			'mt-8 md:mt-12 text-base md:text-lg leading-[1.75em] md:leading-[2em]',
		)}
	>
		{renderChapterContent(chapterContentHtml, isStudyMode)}
	</div>
)
