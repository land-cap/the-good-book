export enum CONTENT_TYPE {
	ChapterTitle = 'chapterTitle',
	SectionTitle = 'sectionTitle',
	Body = 'body',
	Quote = 'quote',
}

export enum VERSE_CONTENT_TYPE {
	Text = 'text',
	JesusWords = 'jesusWords',
}

export type TChapterTitle = {
	type: CONTENT_TYPE.ChapterTitle
	content: string
}

export type TSectionTitle = {
	type: CONTENT_TYPE.SectionTitle
	content: string
}

export type TVerse = {
	type: CONTENT_TYPE.Body
	verseNumber: number
	content: {
		type: VERSE_CONTENT_TYPE.Text | VERSE_CONTENT_TYPE.JesusWords
		content: string
	}[]
}

export type TBody = { type: CONTENT_TYPE.Body; content: TVerse[] }

export type TQuote = {
	type: CONTENT_TYPE.Quote
	verseNumber?: number
	content: string
}

export type TChapterDataItem = (
	| TChapterTitle
	| TSectionTitle
	| TBody
	| TQuote
)[]
