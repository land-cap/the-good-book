import { useAtomValue } from 'jotai'
import { useCallback } from 'react'

import { readerPageContainerElAtom } from '../../_readerPage.state'
import { useOnReaderParamChange } from './useOnReaderParamChange'

export const useResetReaderScrollOnParamChange = (
	currBookCode: string,
	currChapter: number,
) => {
	const readerPageContentEl = useAtomValue(readerPageContainerElAtom)

	const handler = useCallback(() => {
		readerPageContentEl && readerPageContentEl.scrollTo(0, 0)
	}, [readerPageContentEl])

	useOnReaderParamChange(handler, currBookCode, currChapter)
}
