import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const isPreferencesMenuOpenDefaultValue = false
export const isPreferencesMenuOpenAtom = atom(isPreferencesMenuOpenDefaultValue)

export type TFontSizeOffset = -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export const FONT_SIZE_OFFSET_KEY = 'fontSizeOffset'
export const fontSizeOffsetDefaultValue = 0
export const fontSizeOffsetAtom = atomWithStorage<TFontSizeOffset>(
	FONT_SIZE_OFFSET_KEY,
	fontSizeOffsetDefaultValue,
)

export type TLeading = 1 | 1.25 | 1.5 | 1.75 | 2 | 2.25 | 2.5 | 2.75 | 3
export const LEADING_KEY = 'leading'
export const leadingDefaultValue = 2
export const leadingAtom = atomWithStorage<TLeading>(
	LEADING_KEY,
	leadingDefaultValue,
)

export const VERSE_BREAKS_LINE_KEY = 'verseBreaksLine'
export const verseBreaksLineDefaultValue = true
export const verseBreaksLineAtom = atomWithStorage(
	VERSE_BREAKS_LINE_KEY,
	verseBreaksLineDefaultValue,
)

export const HIDE_NON_ORIGINAL_TEXT_KEY = 'hideNonOriginalText'
export const hideNonOriginalTextDefaultValue = false
export const hideNonOriginalTextAtom = atomWithStorage(
	HIDE_NON_ORIGINAL_TEXT_KEY,
	hideNonOriginalTextDefaultValue,
)

export const SHOW_RED_LETTERS_KEY = 'showRedLetters'
export const showRedLettersDefaultValue = true
export const showRedLettersAtom = atomWithStorage(
	SHOW_RED_LETTERS_KEY,
	showRedLettersDefaultValue,
)
