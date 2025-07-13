'use client'

import { useAtomValue, useSetAtom } from 'jotai'
import { useParams } from 'next/navigation'
import { useContext, useEffect, useId } from 'react'
import { css } from 'styled-system/css'

import type { TReaderPageParams } from '~/_pages'
import type { ChapterOMNode } from '~/_pages/ReaderPage/chapterContent/renderChapterContent/normalizeOriginalChapterHTML'
import { CurrVerseContext } from '~/_pages/ReaderPage/chapterContent/renderChapterContent/Verse'
import { Icon } from '~/components'
import { type TBook } from '~/db'
import {
	currVerseDetailsIdAtom,
	enableVerseDetailsAtom,
	showVerseDetailsMenuAtom,
	verseDetailsAtomFamily,
} from '~/state'

import { extractFootnote, extractReferenceList } from './verseDetails.helpers'

const iconCls = css({
	display: 'inline',
	pos: 'relative',
	bottom: '0.5em',
	cursor: 'pointer',
	fontSize: '1em',
	color: 'fg.faded',
	w: 'content',
	h: 'content',
	verticalAlign: 'text-bottom',
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
	singleChapterBookList,
}: {
	childrenOM: ChapterOMNode[]
	bookName: string
	bookAbbrToName: Record<string, string>
	bookNameToCode: Record<string, string>
	singleChapterBookList: TBook[]
}) => {
	const id = useId()

	const setVerseDetails = useSetAtom(verseDetailsAtomFamily(id))

	const enableVerseDetails = useAtomValue(enableVerseDetailsAtom)

	const setCurrVerseDetailsId = useSetAtom(currVerseDetailsIdAtom)

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
				singleChapterBookList,
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
		singleChapterBookList,
	])

	// TODO: move this logic in module for processing reference text
	useEffect(() => {
		const footnote = extractFootnote(childrenOM)
		footnote && setVerseDetails((prev) => ({ ...prev, footnote }))
	}, [childrenOM, setVerseDetails])

	const setShowVerseDetailsMenu = useSetAtom(showVerseDetailsMenuAtom)

	const handleClick = () => {
		setCurrVerseDetailsId(id)
		setShowVerseDetailsMenu(true)
	}

	if (!enableVerseDetails) {
		return null
	}

	return (
		<>
			<button
				onClick={handleClick}
				className={css({ display: 'inline-block' })}
			>
				<Icon name="info" className={iconCls} />
			</button>
		</>
	)
}
