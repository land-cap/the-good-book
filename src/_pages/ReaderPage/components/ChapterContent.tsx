'use client'

import { twMerge } from 'tailwind-merge'
import { type ChapterOM } from '../chapterContentData/getChapterObjectModel'
import { renderChapterContent } from '../chapterContentData/renderChapterContent'
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
			'mt-8 md:mt-12 text-base md:text-lg leading-[2em] md:leading-[2.25em]',
		)}
	>
		{renderChapterContent(chapterContentHtml, isStudyMode)}
	</div>
)
