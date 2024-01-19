'use client'

import { useSetAtom } from 'jotai'
import { useHydrateAtoms } from 'jotai/utils'
import { useEffect } from 'react'

import {
	fontSizeOffsetAtom,
	hideNonOriginalTextAtom,
	hideNonOriginalTextDefaultValue,
	isPreferencesMenuOpenAtom,
	isPreferencesMenuOpenDefaultValue,
	leadingAtom,
	leadingDefaultValue,
	showRedLettersAtom,
	showRedLettersDefaultValue,
	type TFontSizeOffset,
	verseBreaksLineAtom,
	verseBreaksLineDefaultValue,
} from '~/app/[bookCode]/_components/TopToolbar/TopToolbar.state'

export const HydrateReaderPageAtoms = ({
	savedFontSizeOffset,
}: {
	savedFontSizeOffset: TFontSizeOffset
}) => {
	const setFontSizeOffset = useSetAtom(fontSizeOffsetAtom)

	useEffect(() => {
		setFontSizeOffset(savedFontSizeOffset)
	}, [savedFontSizeOffset, setFontSizeOffset])

	useHydrateAtoms([
		[isPreferencesMenuOpenAtom, isPreferencesMenuOpenDefaultValue],
		[fontSizeOffsetAtom, savedFontSizeOffset],
		[leadingAtom, leadingDefaultValue],
		[verseBreaksLineAtom, verseBreaksLineDefaultValue],
		[hideNonOriginalTextAtom, hideNonOriginalTextDefaultValue],
		[showRedLettersAtom, showRedLettersDefaultValue],
	])

	return null
}
