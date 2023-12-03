'use client'

import { useHydrateAtoms } from 'jotai/utils'
import { bookNameAtom, chapterAtom, readerModeAtom } from './reader.state'
import { type READER_MODE } from './ReaderPage.types'

export const ReaderStateSetup = ({
	bookName,
	chapter,
	readerMode,
}: {
	bookName: string
	chapter: number
	readerMode: READER_MODE
}) => {
	useHydrateAtoms([
		[bookNameAtom, bookName],
		[chapterAtom, chapter],
		[readerModeAtom, readerMode],
	])

	return null
}
