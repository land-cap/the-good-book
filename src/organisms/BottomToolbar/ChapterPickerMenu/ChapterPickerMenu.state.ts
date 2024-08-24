import { atom } from 'jotai'

import { bookListAtom } from '~/state/reader.state'

export const selectedBookIdAtom = atom('')

export const selectedBookAtom = atom((get) => {
	const bookList = get(bookListAtom)
	const selectedBookId = get(selectedBookIdAtom)
	return bookList.find(({ id }) => id === selectedBookId)
})
