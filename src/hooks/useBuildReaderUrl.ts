import { useCallback } from 'react'

import { useSelectedLayoutPathname } from './useSelectedLayoutPathname'

export const useBuildReaderUrl = () => {
	const readerLayoutPathname = useSelectedLayoutPathname()

	return useCallback(
		({
			bookCode,
			chapter,
			verseRange,
		}: {
			bookCode?: string
			chapter?: number
			verseRange?: string | number
		}) => {
			if (!bookCode) {
				return readerLayoutPathname
			}
			if (!chapter) {
				return `${readerLayoutPathname}${bookCode}`
			}
			return `${readerLayoutPathname}${bookCode}/${chapter}${
				verseRange ? `?verse-range=${verseRange}` : ''
			}`
		},
		[readerLayoutPathname],
	)
}
