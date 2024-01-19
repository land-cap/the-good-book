'use client'

import { useAtom } from 'jotai'
import { type PrimitiveAtom } from 'jotai/index'
import { useHydrateAtoms } from 'jotai/utils'
import { useEffect } from 'react'

import {
	FONT_SIZE_OFFSET_COOKIE,
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

const useSetupClientState = <T>(
	atom: PrimitiveAtom<T>,
	savedValue: T,
	cookieName: string,
) => {
	const [value, setValue] = useAtom(atom)

	useEffect(() => {
		//eslint-disable-next-line @typescript-eslint/restrict-template-expressions
		document.cookie = `${cookieName}=${value}`
	}, [cookieName, value])

	useEffect(() => {
		setValue(savedValue)
	}, [savedValue, setValue])

	useHydrateAtoms([[atom, savedValue]])
}

export const HydrateReaderPageAtoms = ({
	savedFontSizeOffset,
}: {
	savedFontSizeOffset: TFontSizeOffset
}) => {
	useSetupClientState(
		fontSizeOffsetAtom,
		savedFontSizeOffset,
		FONT_SIZE_OFFSET_COOKIE,
	)

	useHydrateAtoms([
		[isPreferencesMenuOpenAtom, isPreferencesMenuOpenDefaultValue],
		[leadingAtom, leadingDefaultValue],
		[verseBreaksLineAtom, verseBreaksLineDefaultValue],
		[hideNonOriginalTextAtom, hideNonOriginalTextDefaultValue],
		[showRedLettersAtom, showRedLettersDefaultValue],
	])

	return null
}
