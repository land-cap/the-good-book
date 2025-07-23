import { dbClient } from '~/db/dbClient'

export const loadChapterFromDb = async ({
																					book,
																					chapter,
																				}: {
	book: string
	chapter: string
}) => {
	const chapterInt = parseInt(chapter, 10)
	const bookRecord = await dbClient.book.findUnique({ where: { code: book } })
	if (!bookRecord) return null

	return dbClient.chapter.findFirst({
		where: { book_id: bookRecord.book_id, chapter: chapterInt },
	})
}