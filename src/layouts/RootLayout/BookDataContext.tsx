'use client'

import {
	createContext,
	type ReactNode,
	useCallback,
	useEffect,
	useMemo,
} from 'react'

import { type TBook, type TChapter } from '~/db'

export type TBookDataContextValue = {
	getBookByCode: (bookCode: string) => TBook | undefined
	getChapter: (bookId: number, chapter: number) => TChapter | undefined
}

const BookDataContext = createContext(
	undefined as unknown as TBookDataContextValue,
)

export const BookDataProvider = ({
	children,
	bookList,
	chapterList,
}: {
	children: ReactNode
	bookList: TBook[]
	chapterList: TChapter[]
}) => {
	useEffect(() => {
		console.log(chapterList)
	}, [chapterList])

	const getBookByCode = useCallback(
		(bookCode: string) => bookList.find(({ code }) => code === bookCode),
		[bookList],
	)

	const getChapter = useCallback(
		(bookId: number, chapter: number) =>
			chapterList.find(
				({ chapter: _chapter, book_id: _bookId }) =>
					chapter === chapter && _bookId === bookId,
			),
		[chapterList],
	)

	const value = useMemo(
		() => ({ getBookByCode, getChapter }),
		[getBookByCode, getChapter],
	)

	return (
		<BookDataContext.Provider value={value}>
			{children}
		</BookDataContext.Provider>
	)
}
