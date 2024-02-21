'use client'

import { useAtomValue, useSetAtom } from 'jotai'
import { useParams, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { type TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import { getBookListWithCache, type TBook } from '~/db'
import { historyAtom, prevHistoryEntryAtom, type THistoryEntry } from '~/state'

const isNewChapterRoute = (
	params: TReaderPageParams,
	prevHistoryEntry?: THistoryEntry,
) => {
	const { bookCode, chapter } = params
	return (
		bookCode !== prevHistoryEntry?.book?.code ||
		Number(chapter) !== prevHistoryEntry?.chapter
	)
}

export function NavigationEvents() {
	const pathname = usePathname()
	const params = useParams<TReaderPageParams>()

	const prevHistoryEntry = useAtomValue(prevHistoryEntryAtom)

	const shouldAddHistoryEntry = isNewChapterRoute(params, prevHistoryEntry)

	const setHistory = useSetAtom(historyAtom)

	const [bookList, setBookList] = useState<TBook[]>([])

	useEffect(() => {
		void (async () => {
			const bookList = await getBookListWithCache()
			setBookList(bookList)
		})()
	}, [])

	useEffect(() => {
		if (bookList.length && shouldAddHistoryEntry) {
			const currBook = bookList.find((book) => book.code === params.bookCode)

			if (!currBook) {
				throw new Error('Current book not found')
			}

			setHistory((prev) => [
				...prev,
				{ chapter: Number(params.chapter), book: currBook },
			])
		}
	}, [pathname, params, shouldAddHistoryEntry, setHistory, bookList])

	return null
}
