import { atom } from 'jotai'

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

export const isPreferencesMenuOpenDefaultValue = false
export const isPreferencesMenuOpenAtom = atom(isPreferencesMenuOpenDefaultValue)

export const fontSizeDefaultValue = 14
export const fontSizeAtom = atom<TReaderFontSize>(fontSizeDefaultValue)

export const leadingDefaultValue = 2
export const leadingAtom = atom<TReaderLeading>(leadingDefaultValue)

export const verseBreaksLineDefaultValue = true
export const verseBreaksLineAtom = atom(verseBreaksLineDefaultValue)

export const hideNonOriginalTextDefaultValue = false
export const hideNonOriginalTextAtom = atom(hideNonOriginalTextDefaultValue)

export const showRedLettersDefaultValue = true
export const showRedLettersAtom = atom(showRedLettersDefaultValue)
