'use client'

import { useSetupClientState } from '~/hooks'
import {
	ENABLE_NON_ORIGINAL_TEXT_COOKIE,
	ENABLE_RED_LETTERS_COOKIE,
	ENABLE_VERSE_DETAILS_COOKIE,
	enableNonOriginalTextAtom,
	enableRedLettersAtom,
	enableVerseDetailsAtom,
	FONT_COOKIE,
	FONT_SIZE_OFFSET_COOKIE,
	fontAtom,
	fontSizeOffsetAtom,
	JUSTIFY_TEXT_COOKIE,
	justifyTextAtom,
	LEADING_COOKIE,
	leadingAtom,
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
	savedEnableNonOriginalText,
	savedEnableRedLetters,
	savedEnableVerseDetailsReferences,
}: {
	savedTheme: THEME
	savedFontSizeOffset: TFontSizeOffset
	savedLeading: TLeading
	savedFont: TFont
	savedVerseBreaksLine: boolean
	savedJustifyText: boolean
	savedEnableNonOriginalText: boolean
	savedEnableRedLetters: boolean
	savedEnableVerseDetailsReferences: boolean
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
		enableNonOriginalTextAtom,
		savedEnableNonOriginalText,
		ENABLE_NON_ORIGINAL_TEXT_COOKIE,
	)
	useSetupClientState(
		enableRedLettersAtom,
		savedEnableRedLetters,
		ENABLE_RED_LETTERS_COOKIE,
	)
	useSetupClientState(
		enableVerseDetailsAtom,
		savedEnableVerseDetailsReferences,
		ENABLE_VERSE_DETAILS_COOKIE,
	)

	return null
}
