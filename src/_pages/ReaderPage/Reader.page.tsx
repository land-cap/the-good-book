import { ChapterTitle, readerStyles } from './reader.styles'
import { getBookName, getChapter } from '~/db'
import * as cheerio from 'cheerio'

const getNormalizedChapterContent = (chapterContent: string) => {
	const $chapterContent = cheerio.load(chapterContent)
	const verseLabelSelector = $chapterContent('.verse > .label')
	verseLabelSelector
		.before((_, html) => `<sup class="label">${html}</sup>`)
		.remove()
	return $chapterContent.html()
}

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
				<div
					dangerouslySetInnerHTML={{
						__html: getNormalizedChapterContent(chapterData.content),
					}}
				/>
			) : null}
		</main>
	)
}
