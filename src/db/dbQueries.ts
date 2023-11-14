import { dbClient } from '~/db/dbClient'
import { withCache } from '~/helpers'

const getBookName = async (bookCode: string) =>
	dbClient.vdc_book_name.findFirst({ where: { book: { code: bookCode } } })

const getBookNameWithCache = withCache(getBookName) as typeof getBookName
export { getBookNameWithCache as getBookName }

const getChapter = async (bookCode: string, chapter: number) => {
	const book = await dbClient.book.findFirst({ where: { code: bookCode } })
	return dbClient.vdc_chapter.findFirst({
		where: { book_id: book?.id, chapter },
	})
}

const getChapterWithCache = withCache(getChapter) as typeof getChapter
export { getChapterWithCache as getChapter }
