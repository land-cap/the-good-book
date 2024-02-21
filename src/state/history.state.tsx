import { atom } from 'jotai'

import { type TBook } from '~/db'

export type THistoryEntry = {
	book: TBook
	chapter: number
}

export const historyAtom = atom<THistoryEntry[]>([])

export const prevHistoryEntryAtom = atom((get) => get(historyAtom)[0])
