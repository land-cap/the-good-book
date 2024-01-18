'use client'

import { useHydrateAtoms } from 'jotai/utils'

import {
	fontSizeAtom,
	hideNonOriginalTextAtom,
	isPreferencesMenuOpenAtom,
	isVerseBreaksLineAtom,
	leadingAtom,
	showRedLettersAtom,
} from '~/app/[readerMode]/_components/TopToolbar/TopToolbar.state'

export const HydrateReaderPageAtoms = () => {
	useHydrateAtoms([
		[isPreferencesMenuOpenAtom, true],
		[fontSizeAtom, 16],
		[leadingAtom, 2],
		[isVerseBreaksLineAtom, true],
		[hideNonOriginalTextAtom, true],
		[showRedLettersAtom, true],
	])

	return null
}
