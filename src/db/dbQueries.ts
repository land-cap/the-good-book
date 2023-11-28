import { dbClient } from '~/db/dbClient'
import { createFileSystemCache, createMemoryCache, withCache } from '~/helpers'

const useMemoryCache = process.env.USE_MEMORY_CACHE === 'true'

const getBook = async (bookCode: string) =>
	dbClient.vdc_book_name.findFirst({ where: { book: { code: bookCode } } })

export const getBookWithCache = withCache(
	getBook,
	useMemoryCache ? createMemoryCache() : createFileSystemCache(),
)

const getChapter = async (bookCode: string, chapter: number) => {
	const book = await dbClient.book.findFirst({ where: { code: bookCode } })
	return dbClient.vdc_chapter.findFirst({
		where: { book_id: book?.id, chapter },
	})
}

export const getChapterWithCache = withCache(
	getChapter,
	useMemoryCache ? createMemoryCache() : createFileSystemCache(),
)
