import { ChapterTitle, readerStyles } from './Reader.styles'
import { getBookName, getChapter } from '~/db'
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

	const chapterData = await getChapter(bookCode, Number(chapter))

	const bookName = await getBookName(bookCode)

	const ENVIRONMENT = process.env.ENVIRONMENT

	return (
		<main className={readerStyles}>
			{bookName?.name ? (
				<ChapterTitle>
					{bookName.name} {chapter}
				</ChapterTitle>
			) : null}
			<p>{ENVIRONMENT}</p>
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
