import { atom, useAtomValue } from 'jotai'
import { useCallback } from 'react'

import { useOnReaderParamChange } from './useOnReaderParamChange'

export const pageContainerElAtom = atom<HTMLDivElement | null>(null)

export const useResetReaderScrollOnParamChange = (
	currBookCode: string,
	currChapter: number,
) => {
	const pageContentEl = useAtomValue(pageContainerElAtom)

	const handler = useCallback(() => {
		pageContentEl && pageContentEl.scrollTo(0, 0)
	}, [pageContentEl])

	useOnReaderParamChange(handler, currBookCode, currChapter)
}
