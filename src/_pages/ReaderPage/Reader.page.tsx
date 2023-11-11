import { readerStyles } from './reader.styles'
import { getChapter } from '~/db'

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

	console.log(chapterData)

	return (
		<main className={readerStyles}>
			{chapterData?.content ? (
				<div dangerouslySetInnerHTML={{ __html: chapterData.content }} />
			) : null}
		</main>
	)
}
