const readerLayoutPathname = '/read/'

export const buildReaderUrl = ({
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
}
