'use client'

import { useAtomValue, useSetAtom } from 'jotai'
import { useParams } from 'next/navigation'
import { useContext, useEffect, useId, useState } from 'react'
import { css } from 'styled-system/css'

import type { ChapterOMNode } from '~/_pages/ReaderPage/chapterContent/renderChapterContent/normalizeOriginalChapterHTML'
import { CurrVerseContext } from '~/_pages/ReaderPage/chapterContent/renderChapterContent/Verse'
import type { TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import {
	currVerseDetailsIDAtom,
	showVerseDetailsAtom,
	verseDetailsAtomFamily,
} from '~/state'

import { getBookName } from './getBookName'
import { extractFootnote, extractReferenceList } from './verseDetails.helpers'

const buttonCls = css({
	cursor: 'pointer',
	display: 'inline',
	m: '-1',
	p: '1',
	fontFamily: 'sans',
	fontWeight: 'bold',
	color: 'fg.faded',
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

	const { bookCode, chapter } = useParams<TReaderPageParams>()

	const [currBookName, setCurrBookName] = useState('')

	useEffect(() => {
		setVerseDetails((prev) => ({ ...prev, verse: currVerse }))
	}, [currVerse, setVerseDetails])

	useEffect(() => {
		void (async () => {
			const bookName = await getBookName(bookCode)
			setCurrBookName(bookName)
		})()
	}, [bookCode])

	useEffect(() => {
		const referenceList = extractReferenceList(
			childrenOM,
			currBookName,
			chapter,
		)
		referenceList && setVerseDetails((prev) => ({ ...prev, referenceList }))
	}, [chapter, childrenOM, currBookName, setVerseDetails])

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
			<button onClick={() => setCurrVerseDetailsId(id)} className={buttonCls}>
				&dagger;
			</button>
		</>
	)
}
