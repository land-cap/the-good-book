'use client'

import { useAtomValue, useSetAtom } from 'jotai'
import { useParams } from 'next/navigation'
import { useContext, useEffect, useId, useState } from 'react'
import { css } from 'styled-system/css'

import type { ChapterOMNode } from '~/_pages/ReaderPage/chapterContent/renderChapterContent/normalizeOriginalChapterHTML'
import { CurrVerseContext } from '~/_pages/ReaderPage/chapterContent/renderChapterContent/Verse'
import type { TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import { Icon } from '~/components'
import { getBookAbbrToName } from '~/organisms/VerseDetailsMenu/getBookAbbrToName'
import { getBookNameByCode } from '~/organisms/VerseDetailsMenu/getBookNameByCode'
import { getBookNameToCode } from '~/organisms/VerseDetailsMenu/getBookNameToCode'
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
}: {
	childrenOM: ChapterOMNode[]
}) => {
	const id = useId()

	const setVerseDetails = useSetAtom(verseDetailsAtomFamily(id))

	const showVerseDetails = useAtomValue(showVerseDetailsAtom)

	const setCurrVerseDetailsId = useSetAtom(currVerseDetailsIDAtom)

	const currVerse = useContext(CurrVerseContext)

	useEffect(() => {
		setVerseDetails((prev) => ({ ...prev, verse: currVerse }))
	}, [currVerse, setVerseDetails])

	const { bookCode, chapter } = useParams<TReaderPageParams>()

	const [currBookName, setCurrBookName] = useState('')

	useEffect(() => {
		void (async () => {
			const bookName = await getBookNameByCode(bookCode)
			setCurrBookName(bookName)
		})()
	}, [bookCode])

	const [bookAbbrToName, setBookAbbrToName] = useState<Record<string, string>>(
		{},
	)

	useEffect(() => {
		void (async () => {
			const bookAbbrToName = await getBookAbbrToName()
			setBookAbbrToName(bookAbbrToName)
		})()
	}, [])

	const [bookNameToCode, setBookNameToCode] = useState<Record<string, string>>(
		{},
	)

	useEffect(() => {
		void (async () => {
			const bookNameToCode = await getBookNameToCode()
			setBookNameToCode(bookNameToCode)
		})()
	}, [])

	useEffect(() => {
		if (
			Object.keys(bookAbbrToName).length &&
			Object.keys(bookNameToCode).length &&
			currBookName &&
			chapter
		) {
			const referenceList = extractReferenceList(
				childrenOM,
				currBookName,
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
		currBookName,
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
			&nbsp;
			<button
				onClick={() => setCurrVerseDetailsId(id)}
				className={css({ display: 'inline' })}
			>
				<Icon name="info" className={iconCls} />
			</button>
		</>
	)
}
