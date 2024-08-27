'use client'

import { useAtom, useSetAtom } from 'jotai'
import { useParams } from 'next/navigation'
import { useState } from 'react'

import type { TReaderPageParams } from '~/_pages'
import { type TBook } from '~/db'
import { bookListAtom, currBookCodeAtom, currChapterAtom } from '~/state'

export const UseSetUpReaderState = ({ bookList }: { bookList: TBook[] }) => {
	const setBookList = useSetAtom(bookListAtom)

	const [shouldSetUpBookListState, setShouldSetUpBookListState] = useState(true)

	if (shouldSetUpBookListState) {
		setBookList(bookList)
		setShouldSetUpBookListState(false)
	}

	const { bookCode: bookCodeParam, chapter: chapterParam } =
		useParams<TReaderPageParams>()

	const [currBookCode, setCurrBookCode] = useAtom(currBookCodeAtom)

	if (bookCodeParam && currBookCode !== bookCodeParam) {
		setCurrBookCode(bookCodeParam)
	}
	const [currChapter, setCurrChapter] = useAtom(currChapterAtom)

	// TODO: find out why this causes an error and find a way to update with causing another render pass
	if (chapterParam && currChapter !== Number(chapterParam)) {
		setCurrChapter(Number(chapterParam))
	}

	return null
}
