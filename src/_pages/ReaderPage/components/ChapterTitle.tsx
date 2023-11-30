import { css } from 'styled-system/css'

export const chapterTitleStyles = css({
	my: { base: '8', md: '12' },
	textStyle: { base: '3xl', md: '4xl' },
	fontWeight: 'blacker',
})
export const ChapterTitle = ({
	bookName,
	chapter,
}: {
	bookName: string
	chapter: string
}) => <h1 className={chapterTitleStyles}>{`${bookName} ${chapter}`}</h1>
