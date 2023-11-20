import { ChapterTitle, readerStyles } from './Reader.styles'
import { getBookNameWithCache, getChapterWithCache } from '~/db'
import { getNormalizedChapterContent } from './getNormalizedChapterContent'
import { ToolBar } from '~/components/molecules/ToolBar'

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

	const chapterTitle = `${bookName?.name} ${chapter}`

	return (
		<main>
			<ChapterTitle>{chapterTitle}</ChapterTitle>
			{chapterData?.content ? (
				<div
					className={readerStyles}
					dangerouslySetInnerHTML={{
						__html: getNormalizedChapterContent(chapterData.content),
					}}
				/>
			) : null}
			<ToolBar chapter={chapterTitle} />
		</main>
	)
}
