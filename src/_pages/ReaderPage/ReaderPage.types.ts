export const enum READER_MODE {
	Study = 'study',
	Read = 'read',
}

export type TReaderPageParams = {
	bookCode: string
	chapter: string
	readerMode: READER_MODE
}
