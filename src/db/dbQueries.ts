import { dbClient } from '~/db/dbClient'
import {
	createFileSystemCache,
	createMemoryCache,
	withCacheAsync,
} from '~/helpers'

const useMemoryCache = process.env.USE_MEMORY_CACHE === 'true'

export const getBookList = async () =>
	dbClient.book.findMany({
		include: { book_name: true },
	})

export const getBookListWithCache = withCacheAsync(
	getBookList,
	useMemoryCache ? createMemoryCache() : createFileSystemCache(),
)

export type TBook = Awaited<ReturnType<typeof getBookList>>[0]

const getChapterList = async () => dbClient.chapter.findMany()

export const getChapterListWithCache = withCacheAsync(
	getChapterList,
	useMemoryCache ? createMemoryCache() : createFileSystemCache(),
)

const getChapter = async (bookCode: string, chapter: number) => {
	const bookList = await getBookListWithCache()

	const book = bookList.find((book) => book.code === bookCode)

	if (!book) throw new Error('Book not found')

	const chapterList = await getChapterListWithCache()

	return chapterList.find(
		({ book_id, chapter: _chapter }) =>
			book_id === book.id && _chapter === chapter,
	)
}

export const getChapterWithCache = withCacheAsync(
	getChapter,
	useMemoryCache ? createMemoryCache() : createFileSystemCache(),
)
