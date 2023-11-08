import {
	Body,
	ChapterTitle,
	Quote,
	SectionTitle,
} from './_components/ReaderComponents'
import { CONTENT_TYPE, type TChapter } from '~/models/bible-data.models'
import { css } from 'styled-system/css'
import { getChapter } from '~/db'

const Reader = async ({
	params,
}: {
	params: {
		bookCode: string
		chapter: string
	}
}) => {
	const { bookCode, chapter } = params

	const chapterData = await getChapter(bookCode, Number(chapter))
	const chapterContent = chapterData?.content as TChapter

	return (
		<main className={css({ color: { _osDark: 'fg.muted' } })}>
			{chapterContent.map((dataItem) => {
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
