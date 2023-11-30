export const enum READER_MODE {
	Study = 'study',
	Read = 'read',
}

export type ReaderPageParams = {
	bookCode: string
	chapter: string
	mode: READER_MODE
}
