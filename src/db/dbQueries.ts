import { dbClient } from '~/db/dbClient'
import { createFileSystemCache, createMemoryCache, withCache } from '~/helpers'

const useMemoryCache = process.env.USE_MEMORY_CACHE === 'true'

const getBookName = async (bookCode: string) =>
	dbClient.vdc_book_name.findFirst({ where: { book: { code: bookCode } } })

export const getBookNameWithCache = withCache(
	getBookName,
	useMemoryCache ? createMemoryCache() : createFileSystemCache(),
) as typeof getBookName

const getChapter = async (bookCode: string, chapter: number) => {
	console.log('getChapter called with', { bookCode, chapter })
	const book = await dbClient.book.findFirst({ where: { code: bookCode } })
	return dbClient.vdc_chapter.findFirst({
		where: { book_id: book?.id, chapter },
	})
}

export const getChapterWithCache = withCache(
	getChapter,
	useMemoryCache ? createMemoryCache() : createFileSystemCache(),
) as typeof getChapter
