'use client'

import { useHydrateAtoms } from 'jotai/utils'

import {
	fontSizeAtom,
	fontSizeDefaultValue,
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
		[fontSizeAtom, fontSizeDefaultValue],
		[leadingAtom, leadingDefaultValue],
		[verseBreaksLineAtom, verseBreaksLineDefaultValue],
		[hideNonOriginalTextAtom, hideNonOriginalTextDefaultValue],
		[showRedLettersAtom, showRedLettersDefaultValue],
	])

	return null
}
