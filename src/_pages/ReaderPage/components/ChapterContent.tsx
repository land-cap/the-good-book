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
	//console.log(renderChapterFromOM(chapterContentHtml))

	<div className={twMerge('reader', isStudyMode && 'reader--mode-study')}>
		{/*{JSON.stringify(chapterContentHtml, null, 2)}*/}
		{renderChapterFromOM(chapterContentHtml)}
	</div>
)
