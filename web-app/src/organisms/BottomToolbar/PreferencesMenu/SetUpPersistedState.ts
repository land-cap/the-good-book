'use client'

import { useSetupClientState } from '~/hooks'
import {
	FONT_COOKIE,
	FONT_SIZE_OFFSET_COOKIE,
	fontAtom,
	fontSizeOffsetAtom,
	JUSTIFY_TEXT_COOKIE,
	justifyTextAtom,
	LEADING_COOKIE,
	leadingAtom,
	SHOW_NON_ORIGINAL_TEXT_COOKIE,
	SHOW_RED_LETTERS_COOKIE,
	SHOW_VERSE_DETAILS_COOKIE,
	showNonOriginalTextAtom,
	showRedLettersAtom,
	showVerseDetailsAtom,
	type TFont,
	type TFontSizeOffset,
	type THEME,
	THEME_COOKIE,
	themeAtom,
	type TLeading,
	VERSE_BREAKS_LINE_COOKIE,
	verseBreaksLineAtom,
} from '~/state'

export const SetUpPersistedState = ({
	savedTheme,
	savedFontSizeOffset,
	savedLeading,
	savedFont,
	savedVerseBreaksLine,
	savedJustifyText,
	savedShowNonOriginalText,
	savedShowRedLetters,
	savedShowVerseDetailsReferences,
}: {
	savedTheme: THEME
	savedFontSizeOffset: TFontSizeOffset
	savedLeading: TLeading
	savedFont: TFont
	savedVerseBreaksLine: boolean
	savedJustifyText: boolean
	savedShowNonOriginalText: boolean
	savedShowRedLetters: boolean
	savedShowVerseDetailsReferences: boolean
}) => {
	useSetupClientState(themeAtom, savedTheme, THEME_COOKIE)
	useSetupClientState(
		fontSizeOffsetAtom,
		savedFontSizeOffset,
		FONT_SIZE_OFFSET_COOKIE,
	)
	useSetupClientState(leadingAtom, savedLeading, LEADING_COOKIE)
	useSetupClientState(fontAtom, savedFont, FONT_COOKIE)
	useSetupClientState(
		verseBreaksLineAtom,
		savedVerseBreaksLine,
		VERSE_BREAKS_LINE_COOKIE,
	)
	useSetupClientState(justifyTextAtom, savedJustifyText, JUSTIFY_TEXT_COOKIE)
	useSetupClientState(
		showNonOriginalTextAtom,
		savedShowNonOriginalText,
		SHOW_NON_ORIGINAL_TEXT_COOKIE,
	)
	useSetupClientState(
		showRedLettersAtom,
		savedShowRedLetters,
		SHOW_RED_LETTERS_COOKIE,
	)
	useSetupClientState(
		showVerseDetailsAtom,
		savedShowVerseDetailsReferences,
		SHOW_VERSE_DETAILS_COOKIE,
	)

	return null
}
