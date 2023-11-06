import {
	Body,
	ChapterTitle,
	Quote,
	SectionTitle,
} from './_components/ReaderComponents'
import { CONTENT_TYPE } from '~/models/bible-data.models'
import { mockChapterDataGen1 } from '~/mocks/mockChapterDataGen1'

const Reader = ({
	params,
}: {
	params: {
		book: string
		chapter: string
	}
}) => {
	const { book, chapter } = params
	console.log({ book, chapter })

	return (
		<main>
			{mockChapterDataGen1.map((dataItem) => {
				const { type, content } = dataItem
				if (type === CONTENT_TYPE.ChapterTitle) {
					return <ChapterTitle key={content}>{content}</ChapterTitle>
				}
				if (type === CONTENT_TYPE.SectionTitle) {
					return <SectionTitle key={content}>{content}</SectionTitle>
				}
				if (type === CONTENT_TYPE.Body) {
					return <Body key={JSON.stringify(content)} verseList={content} />
				}
				if (type === CONTENT_TYPE.Quote) {
					return <Quote key={content} quote={dataItem} />
				}
			})}
		</main>
	)
}

export default Reader
