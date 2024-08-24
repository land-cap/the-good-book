'use client'

import { useSelectedLayoutSegments } from 'next/navigation'
import { useLocalStorage } from 'usehooks-ts'

import { isInBrowser } from '~/helpers.client'

const READER_PATHNAME_LS_KEY = 'reader-pathname'

export const UseRestorePrevSessionChapter = () => {
	const [readerPathname, setReaderPathname] = useLocalStorage(
		READER_PATHNAME_LS_KEY,
		'',
	)

	const readerPathSegments = useSelectedLayoutSegments()

	if (isInBrowser && readerPathname !== readerPathSegments.join('/')) {
		setReaderPathname(readerPathSegments.join('/'))
	}

	return null
}
