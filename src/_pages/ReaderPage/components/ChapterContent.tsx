'use client'

import { isStudyModeAtom } from '../reader.state'
import { useAtom } from 'jotai'
import { cx } from 'styled-system/css'
import {
	bodyStyles_mode_study,
	readerStyles,
} from '~/_pages/ReaderPage/reader.styles'

export const ChapterContent = ({
	chapterContentHtml,
}: {
	chapterContentHtml: string
}) => {
	const [isStudyMode] = useAtom(isStudyModeAtom)

	return (
		<div
			className={cx(readerStyles, isStudyMode && bodyStyles_mode_study)}
			dangerouslySetInnerHTML={{
				__html: chapterContentHtml,
			}}
		/>
	)
}
