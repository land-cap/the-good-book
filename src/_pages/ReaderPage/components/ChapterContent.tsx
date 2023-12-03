import { twMerge } from 'tailwind-merge'
import '../Reader.css'

export const ChapterContent = ({
	chapterContentHtml,
	isStudyMode,
}: {
	chapterContentHtml: string
	isStudyMode: boolean
}) => (
	<div
		className={twMerge('reader', isStudyMode && 'reader--mode-study')}
		dangerouslySetInnerHTML={{
			__html: chapterContentHtml,
		}}
	/>
)
