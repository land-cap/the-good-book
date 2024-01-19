import { atom } from 'jotai'

export type TFontSizeOffset = -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type TLeading = 1 | 1.25 | 1.5 | 1.75 | 2 | 2.25 | 2.5 | 2.75 | 3

export const isPreferencesMenuOpenDefaultValue = false
export const isPreferencesMenuOpenAtom = atom(isPreferencesMenuOpenDefaultValue)

export const FONT_SIZE_OFFSET_COOKIE = 'fontSizeOffset'
export const fontSizeOffsetDefaultValue = 0
export const fontSizeOffsetAtom = atom<TFontSizeOffset>(
	fontSizeOffsetDefaultValue,
)

export const leadingDefaultValue = 2
export const leadingAtom = atom<TLeading>(leadingDefaultValue)

export const verseBreaksLineDefaultValue = true
export const verseBreaksLineAtom = atom(verseBreaksLineDefaultValue)

export const hideNonOriginalTextDefaultValue = false
export const hideNonOriginalTextAtom = atom(hideNonOriginalTextDefaultValue)

export const showRedLettersDefaultValue = true
export const showRedLettersAtom = atom(showRedLettersDefaultValue)
