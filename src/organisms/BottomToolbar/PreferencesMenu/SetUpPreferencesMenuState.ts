'use client'

import { usePrevious } from '@mantine/hooks'
import { useAtom } from 'jotai'
import { type PrimitiveAtom } from 'jotai/index'
import { useHydrateAtoms } from 'jotai/utils'
import { useEffect } from 'react'

import { setCookie } from '~/app/action'
import {
	FONT_SIZE_OFFSET_COOKIE,
	fontSizeOffsetAtom,
	LEADING_COOKIE,
	leadingAtom,
	SHOW_CROSS_REFERENCES_COOKIE,
	SHOW_NON_ORIGINAL_TEXT_COOKIE,
	SHOW_RED_LETTERS_COOKIE,
	showCrossReferencesAtom,
	showNonOriginalTextAtom,
	showRedLettersAtom,
	type TFontSizeOffset,
	type TLeading,
	VERSE_BREAKS_LINE_COOKIE,
	verseBreaksLineAtom,
} from '~/state'

const useSetupClientState = <T>(
	atom: PrimitiveAtom<T>,
	savedValue: T,
	cookieName: string,
) => {
	const [value, setValue] = useAtom(atom)

	useEffect(() => {
		setValue(savedValue)
	}, [savedValue, setValue])

	const prevValue = usePrevious(value)

	useEffect(() => {
		if (prevValue !== value) {
			void setCookie(cookieName, JSON.stringify(value))
		}
	}, [cookieName, prevValue, value])

	useHydrateAtoms([[atom, savedValue]])
}

export const SetUpPreferencesMenuState = ({
	savedFontSizeOffset,
	savedLeading,
	savedVerseBreaksLine,
	savedShowNonOriginalText,
	savedShowRedLetters,
	savedShowCrossReferences,
}: {
	savedFontSizeOffset: TFontSizeOffset
	savedLeading: TLeading
	savedVerseBreaksLine: boolean
	savedShowNonOriginalText: boolean
	savedShowRedLetters: boolean
	savedShowCrossReferences: boolean
}) => {
	useSetupClientState(
		fontSizeOffsetAtom,
		savedFontSizeOffset,
		FONT_SIZE_OFFSET_COOKIE,
	)
	useSetupClientState(leadingAtom, savedLeading, LEADING_COOKIE)
	useSetupClientState(
		verseBreaksLineAtom,
		savedVerseBreaksLine,
		VERSE_BREAKS_LINE_COOKIE,
	)
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
		showCrossReferencesAtom,
		savedShowCrossReferences,
		SHOW_CROSS_REFERENCES_COOKIE,
	)

	return null
}
