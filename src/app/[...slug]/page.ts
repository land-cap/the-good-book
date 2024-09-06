import { redirect } from 'next/navigation'

import { getBookListWithCache } from '~/db'

import { buildReaderUrl, VERSE_RANGE_SEARCH_PARAM } from '../read/lib'

const getIsReaderSubPath = async (slug: string[]) => {
	if (slug.length !== 2) {
		return false
	}

	const [firstSegment, secondSegment] = slug as [string, string]

	const bookList = await getBookListWithCache()

	const book = bookList.find(({ code }) => firstSegment === code)

	if (!book) {
		return false
	}

	const secondSegmentIsValidChapter =
		Number(secondSegment) <= book.chapter_count

	if (secondSegmentIsValidChapter) {
		return true
	}
}

const RootCatchAllPage = async ({
	params: { slug },
	searchParams,
}: {
	params: { slug: string[] }
	searchParams: Record<string, string | string[] | undefined>
}) => {
	const isReaderSubPath = await getIsReaderSubPath(slug)

	if (isReaderSubPath) {
		const verseRangeParamValue = searchParams[VERSE_RANGE_SEARCH_PARAM]

		redirect(
			buildReaderUrl({
				bookCode: slug[0],
				chapter: Number(slug[1]),
				verseRange:
					typeof verseRangeParamValue === 'string'
						? verseRangeParamValue
						: undefined,
			}),
		)
	}

	redirect(buildReaderUrl())
}

export default RootCatchAllPage
