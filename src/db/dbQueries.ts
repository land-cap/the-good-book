import { dbClient } from '~/db/dbClient'

export const getBookName = async (bookCode: string) =>
	dbClient.vdc_book_name.findFirst({ where: { book: { code: bookCode } } })

export const getChapter = async (bookCode: string, chapter: number) => {
	const book = await dbClient.book.findFirst({ where: { code: bookCode } })
	return dbClient.vdc_chapter.findFirst({
		where: { book_id: book?.id, chapter },
	})
}
