'use client'

import { useAtom } from 'jotai'
import { type PrimitiveAtom } from 'jotai/index'
import { useHydrateAtoms } from 'jotai/utils'
import { useEffect, useState } from 'react'

import {
	FONT_SIZE_OFFSET_COOKIE,
	fontSizeOffsetAtom,
	HIDE_NON_ORIGINAL_TEXT_COOKIE,
	hideNonOriginalTextAtom,
	LEADING_COOKIE,
	leadingAtom,
	SHOW_RED_LETTERS_COOKIE,
	showRedLettersAtom,
	type TFontSizeOffset,
	type TLeading,
	VERSE_BREAKS_LINE_COOKIE,
	verseBreaksLineAtom,
} from '~/app/@topToolbar/_components/TopToolbar/TopToolbar.state'

const useSetupClientState = <T>(
	atom: PrimitiveAtom<T>,
	savedValue: T,
	cookieName: string,
) => {
	const [value, setValue] = useAtom(atom)

	const [hasHydrated, setHasHydrated] = useState(false)

	useEffect(() => setHasHydrated(true), [])

	useEffect(() => {
		if (hasHydrated) {
			localStorage.setItem(cookieName, JSON.stringify(value))
		}
	}, [cookieName, hasHydrated, value])

	useEffect(
		//@ts-ignore
		() => setValue(localStorage.getItem(cookieName)),
		[cookieName, setValue],
	)

	//@ts-ignore
	useHydrateAtoms([[atom, localStorage.getItem(cookieName)]])
}

export const SetUpPreferencesMenuState = ({
	savedFontSizeOffset,
	savedLeading,
	savedVerseBreaksLine,
	savedHideNonOriginalText,
	savedShowRedLetters,
}: {
	savedFontSizeOffset: TFontSizeOffset
	savedLeading: TLeading
	savedVerseBreaksLine: boolean
	savedHideNonOriginalText: boolean
	savedShowRedLetters: boolean
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
		hideNonOriginalTextAtom,
		savedHideNonOriginalText,
		HIDE_NON_ORIGINAL_TEXT_COOKIE,
	)
	useSetupClientState(
		showRedLettersAtom,
		savedShowRedLetters,
		SHOW_RED_LETTERS_COOKIE,
	)

	return null
}
