import { ChapterTitle, readerStyles } from './reader.styles'
import { getBookName, getChapter } from '~/db'

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

	return (
		<main className={readerStyles}>
			{bookName?.name ? (
				<ChapterTitle>
					{bookName.name} {chapter}
				</ChapterTitle>
			) : null}
			{chapterData?.content ? (
				<div dangerouslySetInnerHTML={{ __html: chapterData.content }} />
			) : null}
		</main>
	)
}
