'use client'

import { useSetAtom } from 'jotai'
import { useEffect } from 'react'

import { type TBook } from '~/db'
import { bookListAtom } from '~/state'

export const UseSetUpReaderState = ({ bookList }: { bookList: TBook[] }) => {
	const setBookList = useSetAtom(bookListAtom)

	useEffect(() => {
		setBookList(bookList)
	}, [bookList, setBookList])

	return null
}
