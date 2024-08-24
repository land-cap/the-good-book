'use client'

import { useLocalStorage } from '@mantine/hooks'
import { useSelectedLayoutSegments } from 'next/navigation'

const READER_PATHNAME_LS_KEY = 'reader-pathname'

export const UseRestorePrevSessionChapter = () => {
	const [readerPathname, setReaderPathname] = useLocalStorage({
		key: READER_PATHNAME_LS_KEY,
	})

	const readerPathSegments = useSelectedLayoutSegments()

	if (readerPathname !== readerPathSegments.join('/')) {
		setReaderPathname(readerPathSegments.join('/'))
	}

	return null
}
