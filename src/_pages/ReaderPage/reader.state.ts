import { atom } from 'jotai'
import { type READER_MODE } from './ReaderPage.types'

export const bookNameAtom = atom<string | null>(null)

export const chapterAtom = atom<number | null>(null)

export const readerModeAtom = atom<READER_MODE | null>(null)
