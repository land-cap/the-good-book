// 'use client'

import { ChapterTitle } from './reader.styles'
import { getBookNameWithCache, getChapterWithCache } from '~/db'
import { ToolBar } from '~/components/molecules/ToolBar'
import { ChapterContent } from './components/ChapterContent'
import { getNormalizedChapterContent } from '~/_pages'

export const ReaderPage = async ({
	params,
}: {
	params: {
		bookCode: string
		chapter: string
	}
}) => {
	const { bookCode, chapter } = params

	const bookName = await getBookNameWithCache(bookCode)

	const chapterTitle = `${bookName?.name} ${chapter}`

	const chapterData = await getChapterWithCache(bookCode, Number(chapter))

	if (chapterData?.content) {
		const chapterContentHtml = getNormalizedChapterContent(chapterData.content)

		return (
			<main>
				<ChapterTitle>{chapterTitle}</ChapterTitle>
				<ChapterContent chapterContentHtml={chapterContentHtml} />
				<ToolBar chapter={chapterTitle} />
			</main>
		)
	}
	throw new Error('No chapter data')
}
