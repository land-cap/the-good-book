'use client'

import { useAtom, useSetAtom } from 'jotai'
import { useParams } from 'next/navigation'
import { useCallback, useEffect } from 'react'
import { useIsFirstRender } from 'usehooks-ts'

import type { TReaderPageParams } from '~/_pages'
import { type TBook } from '~/db'
import { bookListAtom, currBookCodeAtom, currChapterAtom } from '~/state'

export const UseSetUpReaderState = ({ bookList }: { bookList: TBook[] }) => {
	const isFirstRender = useIsFirstRender()

	const setBookList = useSetAtom(bookListAtom)

	if (isFirstRender) {
		setBookList(bookList)
	}

	const { bookCode: bookCodeParam, chapter: chapterParam } =
		useParams<TReaderPageParams>()

	const [currBookCode, setCurrBookCode] = useAtom(currBookCodeAtom)

	const updateCurrBookCode = useCallback(
		() => setCurrBookCode(bookCodeParam),
		[bookCodeParam, setCurrBookCode],
	)

	if (isFirstRender && currBookCode !== bookCodeParam) {
		updateCurrBookCode()
	}

	useEffect(() => {
		!isFirstRender && updateCurrBookCode()
	}, [isFirstRender, updateCurrBookCode])

	const [currChapter, setCurrChapter] = useAtom(currChapterAtom)

	const updateCurrChapter = useCallback(
		() => setCurrChapter(Number(chapterParam)),
		[chapterParam, setCurrChapter],
	)

	if (isFirstRender && currChapter !== Number(chapterParam)) {
		updateCurrChapter()
	}

	useEffect(() => {
		!isFirstRender && updateCurrChapter()
	}, [chapterParam, isFirstRender, updateCurrChapter])

	return null
}
