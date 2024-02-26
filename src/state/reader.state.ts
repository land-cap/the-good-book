import { atom } from 'jotai'
import { atomFamily } from 'jotai/utils'
import { type ReactNode } from 'react'

import { type TBook } from '~/db'

export const prevChapterURLAtom = atom<string>('')

export const nextChapterURLAtom = atom<string>('')

export const isFirstChapterAtom = atom(false)

export const isLastChapterAtom = atom(false)

/**
 * VERSE DETAILS STATE
 */

export const currVerseDetailsIDAtom = atom<string | null>(null)

export type TCrossReference = {
	label: string
	url: string
	bookCode: string
	chapter: number
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
	const id = get(currVerseDetailsIDAtom)
	return id ? get(verseDetailsAtomFamily(id)) : null
})

export type THistoryEntry = {
	book: TBook
	chapter: number
}

export const referenceOriginAtom = atom<THistoryEntry | undefined>(undefined)

export const selectedReferenceAtom = atom<TCrossReference | undefined>(
	undefined,
)

/**
 * PREFERENCES STATE
 */

export type TFontSizeOffset = -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export const FONT_SIZE_OFFSET_COOKIE = 'font-size-offset'
export const fontSizeOffsetDefaultValue = 0
export const fontSizeOffsetAtom = atom<TFontSizeOffset>(
	fontSizeOffsetDefaultValue,
)

export type TLeading = 1.5 | 1.75 | 2 | 2.25 | 2.5 | 2.75 | 3
export const LEADING_COOKIE = 'leading'
export const leadingDefaultValue = 2
export const leadingAtom = atom<TLeading>(leadingDefaultValue)

export const VERSE_BREAKS_LINE_COOKIE = 'verse-breaks-line'
export const verseBreaksLineDefaultValue = true
export const verseBreaksLineAtom = atom(verseBreaksLineDefaultValue)

export const SHOW_NON_ORIGINAL_TEXT_COOKIE = 'show-non-original-text'
export const showNonOriginalTextDefaultValue = true
export const showNonOriginalTextAtom = atom(showNonOriginalTextDefaultValue)

export const SHOW_RED_LETTERS_COOKIE = 'show-red-letters'
export const showRedLettersDefaultValue = true
export const showRedLettersAtom = atom(showRedLettersDefaultValue)

export const SHOW_VERSE_DETAILS_COOKIE = 'show-verse-details'
export const showVerseDetailsDefaultValue = true
export const showVerseDetailsAtom = atom(showVerseDetailsDefaultValue)

export const JUSTIFY_TEXT_COOKIE = 'justify-text'
export const justifyTextDefaultValue = true
export const justifyTextAtom = atom(justifyTextDefaultValue)
