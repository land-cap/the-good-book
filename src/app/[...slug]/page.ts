import { redirect } from 'next/navigation'

import { getBookListWithCache } from '~/db'
import { buildReaderUrl } from '~/hooks'

const getIsReaderSubpath = async (slug: string[]) => {
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
}: {
	params: { slug: string[] }
}) => {
	const isReaderSubpath = await getIsReaderSubpath(slug)

	if (isReaderSubpath) {
		redirect(buildReaderUrl({ bookCode: slug[0], chapter: Number(slug[1]) }))
	}
}

export default RootCatchAllPage
