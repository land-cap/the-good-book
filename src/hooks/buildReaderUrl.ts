import { VERSE_RANGE_SEARCH_PARAM } from '~/layouts/ReaderLayout/readerLayout.constants'

const readerLayoutPathname = '/read'

export const buildReaderUrl = ({
	bookCode,
	chapter,
	verseRange,
}: {
	bookCode?: string
	chapter?: number
	verseRange?: string | number
} = {}) => {
	if (!bookCode) {
		return readerLayoutPathname
	}

	if (!chapter) {
		return `${readerLayoutPathname}/${bookCode}`
	}

	return `${readerLayoutPathname}/${bookCode}/${chapter}${
		verseRange ? `?${VERSE_RANGE_SEARCH_PARAM}=${verseRange}` : ''
	}`
}
