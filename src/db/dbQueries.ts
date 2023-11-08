import { dbClient } from '~/db/dbClient'

export const getChapter = async (bookCode: string, chapter: number) => {
	const book = await dbClient.book.findFirst({ where: { code: bookCode } })
	return dbClient.vdc_chapter.findFirst({
		where: { book_id: book?.id, chapter },
	})
}
