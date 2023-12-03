'use client'

import { twMerge } from 'tailwind-merge'
import { renderChapterFromOM } from '~/_pages/ReaderPage/components/renderChapterFromOM'
import '../Reader.css'

export const ChapterContent = ({
	chapterContentHtml,
	isStudyMode,
}: {
	chapterContentHtml: string
	isStudyMode: boolean
}) => (
	//console.log(renderChapterFromOM(chapterContentHtml))

	<div className={twMerge('reader', isStudyMode && 'reader--mode-study')}>
		{/*{JSON.stringify(chapterContentHtml, null, 2)}*/}
		{renderChapterFromOM(chapterContentHtml)}
	</div>
)
