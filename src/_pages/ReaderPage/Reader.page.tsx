import { ChapterTitle, readerStyles } from './Reader.styles'
import { getBookNameWithCache, getChapterWithCache } from '~/db'
import { getNormalizedChapterContent } from './getNormalizedChapterContent'

export const ReaderPage = async ({
	params,
}: {
	params: {
		bookCode: string
		chapter: string
	}
}) => {
	const { bookCode, chapter } = params

	const chapterData = await getChapterWithCache(bookCode, Number(chapter))

	const bookName = await getBookNameWithCache(bookCode)

	return (
		<main className={readerStyles}>
			{bookName?.name ? (
				<ChapterTitle>
					{bookName.name} {chapter}
				</ChapterTitle>
			) : null}
			{chapterData?.content ? (
				<div
					dangerouslySetInnerHTML={{
						__html: getNormalizedChapterContent(chapterData.content),
					}}
					suppressHydrationWarning
				/>
			) : null}
		</main>
	)
}
