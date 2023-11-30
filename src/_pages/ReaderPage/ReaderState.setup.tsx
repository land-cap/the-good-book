'use client'

import { useAtomValue } from 'jotai'
import { useHydrateAtoms } from 'jotai/utils'
import { useEffect } from 'react'
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

	const _bookName = useAtomValue(bookNameAtom)
	const _chapter = useAtomValue(chapterAtom)
	const _readerMode = useAtomValue(readerModeAtom)

	useEffect(() => {
		console.log({ _bookName, _chapter, _readerMode })
	}, [_bookName, _chapter, _readerMode])
	return null
}
