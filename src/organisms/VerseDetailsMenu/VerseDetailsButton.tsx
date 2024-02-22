'use client'

import { useAtomValue, useSetAtom } from 'jotai'
import { useParams } from 'next/navigation'
import { useContext, useEffect, useId } from 'react'
import { css } from 'styled-system/css'

import type { ChapterOMNode } from '~/_pages/ReaderPage/chapterContent/renderChapterContent/normalizeOriginalChapterHTML'
import { CurrVerseContext } from '~/_pages/ReaderPage/chapterContent/renderChapterContent/Verse'
import type { TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import { Icon } from '~/components'
import {
	currVerseDetailsIDAtom,
	showVerseDetailsAtom,
	verseDetailsAtomFamily,
} from '~/state'

import { extractFootnote, extractReferenceList } from './verseDetails.helpers'

const iconCls = css({
	cursor: 'pointer',
	display: 'inline',
	fontSize: '1em',
	color: 'fg.subtle',
	w: 'content',
	h: 'content',
	verticalAlign: 'text-top',
	_active: { color: 'fg' },
	_canHover: { _hover: { color: 'fg' } },
	transition: 'colors',
	transitionDuration: 'fast',
	transitionTimingFunction: 'ease-out',
})

export const VerseDetailsButton = ({
	childrenOM,
	bookName,
	bookAbbrToName,
	bookNameToCode,
}: {
	childrenOM: ChapterOMNode[]
	bookName: string
	bookAbbrToName: Record<string, string>
	bookNameToCode: Record<string, string>
}) => {
	const id = useId()

	const setVerseDetails = useSetAtom(verseDetailsAtomFamily(id))

	const showVerseDetails = useAtomValue(showVerseDetailsAtom)

	const setCurrVerseDetailsId = useSetAtom(currVerseDetailsIDAtom)

	const currVerse = useContext(CurrVerseContext)

	useEffect(() => {
		setVerseDetails((prev) => ({ ...prev, verse: currVerse }))
	}, [currVerse, setVerseDetails])

	const { chapter } = useParams<TReaderPageParams>()

	useEffect(() => {
		if (
			Object.keys(bookAbbrToName).length &&
			Object.keys(bookNameToCode).length &&
			bookName &&
			chapter
		) {
			const referenceList = extractReferenceList(
				childrenOM,
				bookName,
				chapter,
				bookAbbrToName,
				bookNameToCode,
			)
			referenceList && setVerseDetails((prev) => ({ ...prev, referenceList }))
		}
	}, [
		bookAbbrToName,
		bookNameToCode,
		chapter,
		childrenOM,
		bookName,
		setVerseDetails,
	])

	useEffect(() => {
		const footnote = extractFootnote(childrenOM)
		footnote && setVerseDetails((prev) => ({ ...prev, footnote }))
	}, [childrenOM, setVerseDetails])

	if (!showVerseDetails) {
		return null
	}

	return (
		<>
			<button
				onClick={() => setCurrVerseDetailsId(id)}
				className={css({ display: 'inline', verticalAlign: 'text-bottom' })}
			>
				<Icon name="info" className={iconCls} />
			</button>
		</>
	)
}
