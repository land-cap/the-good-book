import { dbClient } from '~/db/dbClient'
import {
	createFileSystemCache,
	createMemoryCache,
	withCacheAsync,
} from '~/helpers'

const useMemoryCache = process.env.USE_MEMORY_CACHE === 'true'

export const getBook = async (bookCode: string) =>
	dbClient.book.findUnique({
		where: { code: bookCode },
	})

export const getBookWithCache = withCacheAsync(
	getBook,
	useMemoryCache ? createMemoryCache() : createFileSystemCache(),
)

export const getBookList = async () =>
	dbClient.book.findMany({
		include: { book_name: true },
	})

export const getBookListWithCache = withCacheAsync(
	getBookList,
	useMemoryCache ? createMemoryCache() : createFileSystemCache(),
)

export type TBook = Awaited<ReturnType<typeof getBookListWithCache>>[0]

const getChapter = async (bookCode: string, chapter: number) => {
	const book = await getBookWithCache(bookCode)

	if (!book) throw new Error('Book not found')

	return dbClient.chapter.findFirst({
		where: {
			book_id: book.id,
			chapter,
		},
	})
}

export const getChapterWithCache = withCacheAsync(
	getChapter,
	useMemoryCache ? createMemoryCache() : createFileSystemCache(),
)
