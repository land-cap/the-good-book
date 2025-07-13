'use client'

import { useAtom } from 'jotai'
import { useSelectedLayoutSegments } from 'next/navigation'
import { useIsFirstRender } from 'usehooks-ts'

import { isInBrowser } from '~/helpers.client'
import { readerRoute } from '~/state'

export const UseRestorePrevSessionChapter = () => {
	const [readerPathname, setReaderPathname] = useAtom(readerRoute)

	const isFirstRender = useIsFirstRender()

	const readerPathSegments = useSelectedLayoutSegments()

	if (isInBrowser && isFirstRender) {
		setReaderPathname(readerPathSegments.join('/'))
	}

	// TODO: if current path is reader root route (without book and chapter) -> navigate to reader path from storage

	return null
}
