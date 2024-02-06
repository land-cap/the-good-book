'use client'

import { useAtomValue, useSetAtom } from 'jotai'
import { useParams } from 'next/navigation'
import { useContext, useEffect, useId, useState } from 'react'
import { css } from 'styled-system/css'

import type { ChapterOMNode } from '~/_pages/ReaderPage/chapterContent/renderChapterContent/normalizeOriginalChapterHTML'
import { CurrVerseContext } from '~/_pages/ReaderPage/chapterContent/renderChapterContent/Verse'
import type { TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import {
	showVerseDetailsAtom,
	verseDetailsAtomFamily,
	verseDetailsMenuCurrVerseAtom,
} from '~/state'

import { getBookName } from './getBookName'
import { extractFootnotes, extractReferenceList } from './verseDetails.helpers'

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

	const [verseDetails, setVerseDetails] = useState(verseDetailsAtomFamily(id))

	const showVerseDetails = useAtomValue(showVerseDetailsAtom)

	const setDetailsMenuCurrVerse = useSetAtom(verseDetailsMenuCurrVerseAtom)

	const currVerse = useContext(CurrVerseContext)

	const { bookCode, chapter } = useParams<TReaderPageParams>()

	const [currBookName, setCurrBookName] = useState('')

	useEffect(() => {
		setVerseDetails((prev) => ({ ...prev, verse: currVerse }))
	}, [currVerse])

	useEffect(() => {
		void (async () => {
			const bookName = await getBookName(bookCode)
			setCurrBookName(bookName)
		})()
	}, [bookCode])

	useEffect(() => {
		console.log('verseDetails', verseDetails)
	}, [verseDetails])

	useEffect(() => {
		const referenceList = extractReferenceList(
			childrenOM,
			currBookName,
			chapter,
		)
		referenceList && setVerseDetails((prev) => ({ ...prev, referenceList }))
	}, [chapter, childrenOM, currBookName, setVerseDetails])

	useEffect(() => {
		const footnotes = extractFootnotes(childrenOM)
		footnotes && setVerseDetails((prev) => ({ ...prev, footnotes }))
	}, [childrenOM, setVerseDetails])

	if (!showVerseDetails) {
		return null
	}

	return (
		<>
			&nbsp;
			<button
				onClick={() => setDetailsMenuCurrVerse(currVerse)}
				className={buttonCls}
			>
				&dagger;
			</button>
		</>
	)
}
