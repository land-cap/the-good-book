'use client'

import { useLocalStorage } from '@mantine/hooks'
import { useSelectedLayoutSegments } from 'next/navigation'

import { isInBrowser } from '~/helpers.client'

const READER_PATHNAME_LS_KEY = 'reader-pathname'

export const UseRestorePrevSessionChapter = () => {
	const [readerPathname, setReaderPathname] = useLocalStorage({
		key: READER_PATHNAME_LS_KEY,
	})

	const readerPathSegments = useSelectedLayoutSegments()

	if (isInBrowser && readerPathname !== readerPathSegments.join('/')) {
		setReaderPathname(readerPathSegments.join('/'))
	}

	return null
}
