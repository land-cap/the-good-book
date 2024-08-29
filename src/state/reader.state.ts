import { atom } from 'jotai'
import { atomFamily, atomWithStorage } from 'jotai/utils'
import { type ReactNode } from 'react'

import { type TBook } from '~/db'

const READER_PATHNAME_LS_KEY = 'reader-pathname'
export const readerRoute = atomWithStorage(READER_PATHNAME_LS_KEY, '')

export const bookListAtom = atom<TBook[]>([])

export const currBookCodeAtom = atom('')

export const currBookAtom = atom((get) => {
	const bookList = get(bookListAtom)
	const currBookCode = get(currBookCodeAtom)
	return bookList.find(({ code }) => code === currBookCode)!
})

export const currChapterAtom = atom(undefined as unknown as number)

export const prevChapterUrlAtom = atom<string>('')

export const nextChapterUrlAtom = atom<string>('')

export const isFirstChapterAtom = atom(false)

export const isLastChapterAtom = atom(false)

/**
 * VERSE DETAILS STATE
 */
export const showVerseDetailsMenuAtom = atom(false)

export const currVerseDetailsIdAtom = atom<string | null>(null)

export type TCrossReference = {
	label: string
	bookCode: string
	chapter: number
	verseRange?: string
}

export type TVerseDetails = {
	id: string
	verse?: number
	referenceList?: TCrossReference[]
	footnote?: ReactNode[]
}

export const verseDetailsAtomFamily = atomFamily(
	(id: string) => atom<TVerseDetails>({ id }),
	(aID, bID) => aID === bID,
)

export const currVerseDetailsAtom = atom((get) => {
	const id = get(currVerseDetailsIdAtom)
	return id ? get(verseDetailsAtomFamily(id)) : null
})

export type THistoryEntry = {
	book: TBook
	chapter: number
	verse?: number
}

export const referenceOriginAtom = atom<THistoryEntry | undefined>(undefined)

export const selectedReferenceAtom = atom<TCrossReference | undefined>(
	undefined,
)

export const showPreferencesMenuAtom = atom(false)

export const isPreferencesMenuSuspendedAtom = atom(false)

export const showFontMenuAtom = atom(false)

export const showThemeMenuAtom = atom(false)

/**
 * PREFERENCES STATE
 */
export enum THEME {
	Default = 'default',
	Sepia = 'sepia',
}

export const THEME_COOKIE = 'theme'
export const themeDefaultValue = THEME.Default
export const themeAtom = atom(THEME.Default)

export type TFontSizeOffset = -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export const FONT_SIZE_OFFSET_COOKIE = 'font-size-offset'
export const fontSizeOffsetDefaultValue = 0
export const fontSizeOffsetAtom = atom<TFontSizeOffset>(
	fontSizeOffsetDefaultValue,
)

export type TLeading = 1.5 | 1.75 | 2 | 2.25 | 2.5 | 2.75 | 3
export const LEADING_COOKIE = 'leading'
export const leadingDefaultValue = 2
export const leadingAtom = atom<TLeading>(leadingDefaultValue)

export type TFont =
	| 'sans'
	| 'clean'
	| 'dyslexic'
	| 'condensed'
	| 'old_style'
	| 'mono'
export const FONT_COOKIE = 'font'
export const fontDefaultValue = 'sans'
export const fontAtom = atom<TFont>(fontDefaultValue)

export const VERSE_BREAKS_LINE_COOKIE = 'verse-breaks-line'
export const verseBreaksLineDefaultValue = true
export const verseBreaksLineAtom = atom(verseBreaksLineDefaultValue)

export const JUSTIFY_TEXT_COOKIE = 'justify-text'
export const justifyTextDefaultValue = true
export const justifyTextAtom = atom(justifyTextDefaultValue)

export const ENABLE_NON_ORIGINAL_TEXT_COOKIE = 'enable-non-original-text'
export const enableNonOriginalTextDefaultValue = true
export const enableNonOriginalTextAtom = atom(enableNonOriginalTextDefaultValue)

export const ENABLE_RED_LETTERS_COOKIE = 'enable-red-letters'
export const enableRedLettersDefaultValue = true
export const enableRedLettersAtom = atom(enableRedLettersDefaultValue)

export const ENABLE_VERSE_DETAILS_COOKIE = 'enable-verse-details'
export const enableVerseDetailsDefaultValue = true
export const enableVerseDetailsAtom = atom(enableVerseDetailsDefaultValue)
