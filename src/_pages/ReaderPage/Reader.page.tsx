import { ChapterTitle, readerStyles } from './reader.styles'
import { mockChapterMarkup } from './MockChapterMarkup'

export const ReaderPage = ({
	params,
}: {
	params: {
		bookCode: string
		chapter: string
	}
}) => {
	const { bookCode, chapter } = params
	console.log({ bookCode, chapter })

	return (
		<main className={readerStyles}>
			<ChapterTitle>Matei 4</ChapterTitle>
			{mockChapterMarkup}
		</main>
	)
}
