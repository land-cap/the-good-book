import { atom } from 'jotai'

export const verseToQuoteInFocusListState = atom(
	new Map<number, HTMLSpanElement>(),
)
