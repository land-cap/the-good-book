'use client'

import { twMerge } from 'tailwind-merge'
import { type ChapterOM } from '../chapterContentData/getChapterOMFromHTMLString'
import { renderChapterFromOM } from '../chapterContentData/renderChapterFromOM'
import '../Reader.css'

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
			'mt-8 md:mt-12',
			isStudyMode && 'reader--mode-study',
		)}
	>
		{renderChapterFromOM(chapterContentHtml)}
	</div>
)
