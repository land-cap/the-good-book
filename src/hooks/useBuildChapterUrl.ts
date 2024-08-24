import { useCallback } from 'react'

import { useSelectedLayoutPathname } from './useSelectedLayoutPathname'

export const useBuildChapterUrl = () => {
	const readerLayoutPathname = useSelectedLayoutPathname()

	return useCallback(
		(bookCode?: string) => (chapter?: number) =>
			`${readerLayoutPathname}${bookCode}/${chapter}`,
		[readerLayoutPathname],
	)
}
