import { atom } from 'jotai'

import { bookListAtom } from '~/state/reader.state'

export type TChapterPickerTab = 'book' | 'chapter'

export const showChapterPickerMenu = atom(false)

export const activeTabAtom = atom<TChapterPickerTab>('book')

export const selectedBookIdAtom = atom('')

export const selectedBookAtom = atom((get) => {
	const bookList = get(bookListAtom)
	const selectedBookId = get(selectedBookIdAtom)
	return bookList.find(({ id }) => id === selectedBookId)!
})
