import { atom } from 'jotai/index'

export type TReaderFontSize =
	| 12
	| 13
	| 14
	| 15
	| 16
	| 17
	| 18
	| 19
	| 20
	| 21
	| 22

export type TReaderLeading = 1 | 1.25 | 1.5 | 1.75 | 2 | 2.25 | 2.5 | 2.75 | 3

export const isPreferencesMenuOpenAtom = atom(false)

export const fontSizeAtom = atom<TReaderFontSize>(16)

export const leadingAtom = atom<TReaderLeading>(2)

export const isVerseBreaksLineAtom = atom(true)

export const hideNonOriginalTextAtom = atom(false)

export const showRedLettersAtom = atom(true)
