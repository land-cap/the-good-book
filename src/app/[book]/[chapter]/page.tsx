import { mockChapterData } from '~/mocks/mockChapterData'
import {
	Body,
	ChapterTitle,
	Quote,
	SectionTitle,
} from './_components/ReaderComponents'
import { CONTENT_TYPE } from '~/models/bible-data.models'
import { styled } from '../../../../styled-system/jsx'

const ReaderContainer = styled('main', {
	base: {
		fontSize: { base: 'md', lg: 'lg' },
		lineHeight: '2',
	},
})

const Reader = ({ params }: { params: { book: string; chapter: string } }) => {
	const { book, chapter } = params
	console.log({ book, chapter })

	const chapterData = mockChapterData

	return (
		<ReaderContainer>
			{chapterData.map((dataItem) => {
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
		</ReaderContainer>
	)
}

export default Reader
