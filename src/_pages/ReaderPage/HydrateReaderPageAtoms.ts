'use client'

import { useHydrateAtoms } from 'jotai/utils'

import {
	fontSizeAtom,
	fontSizeOffsetDefaultValue,
	hideNonOriginalTextAtom,
	hideNonOriginalTextDefaultValue,
	isPreferencesMenuOpenAtom,
	isPreferencesMenuOpenDefaultValue,
	leadingAtom,
	leadingDefaultValue,
	showRedLettersAtom,
	showRedLettersDefaultValue,
	verseBreaksLineAtom,
	verseBreaksLineDefaultValue,
} from '~/app/[bookCode]/_components/TopToolbar/TopToolbar.state'

export const HydrateReaderPageAtoms = () => {
	useHydrateAtoms([
		[isPreferencesMenuOpenAtom, isPreferencesMenuOpenDefaultValue],
		[fontSizeAtom, fontSizeOffsetDefaultValue],
		[leadingAtom, leadingDefaultValue],
		[verseBreaksLineAtom, verseBreaksLineDefaultValue],
		[hideNonOriginalTextAtom, hideNonOriginalTextDefaultValue],
		[showRedLettersAtom, showRedLettersDefaultValue],
	])

	return null
}
