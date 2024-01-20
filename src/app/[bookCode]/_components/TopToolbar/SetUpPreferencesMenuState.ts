'use client'

import { useHydrateAtoms } from 'jotai/utils'

import {
	FONT_SIZE_OFFSET_KEY,
	fontSizeOffsetAtom,
	HIDE_NON_ORIGINAL_TEXT_KEY,
	hideNonOriginalTextAtom,
	LEADING_KEY,
	leadingAtom,
	SHOW_RED_LETTERS_KEY,
	showRedLettersAtom,
	type TFontSizeOffset,
	type TLeading,
	VERSE_BREAKS_LINE_KEY,
	verseBreaksLineAtom,
} from './TopToolbar.state'

export const SetUpPreferencesMenuState = () => {
	useHydrateAtoms([
		[
			fontSizeOffsetAtom,
			Number(localStorage.getItem(FONT_SIZE_OFFSET_KEY)!) as TFontSizeOffset,
		],
		[leadingAtom, Number(localStorage.getItem(LEADING_KEY)!) as TLeading],
		[
			verseBreaksLineAtom,
			localStorage.getItem(VERSE_BREAKS_LINE_KEY) === 'true',
		],
		[
			hideNonOriginalTextAtom,
			localStorage.getItem(HIDE_NON_ORIGINAL_TEXT_KEY) === 'true',
		],
		[showRedLettersAtom, localStorage.getItem(SHOW_RED_LETTERS_KEY) === 'true'],
	])

	return null
}
