import { cx } from 'styled-system/css'
import { bodyStyles_mode_study, readerStyles } from '../reader.styles'

export const ChapterContent = ({
	chapterContentHtml,
	isStudyMode,
}: {
	chapterContentHtml: string
	isStudyMode: boolean
}) => (
	<div
		className={cx(readerStyles, isStudyMode && bodyStyles_mode_study)}
		dangerouslySetInnerHTML={{
			__html: chapterContentHtml,
		}}
	/>
)
