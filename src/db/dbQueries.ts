'use server'

import { getDbClient } from '~/db/dbClient'
import {
	createFileSystemCache,
	createMemoryCache,
	withCacheAsync,
} from '~/helpers'

const useMemoryCache = process.env.USE_MEMORY_CACHE === 'true'

export const getBook = async (bookCode: string) =>
	getDbClient().book.findFirst({
		where: { code: bookCode },
		include: { book_name: true, book_abbreviation: true },
	})

export const getBookWithCache = withCacheAsync(
	getBook,
	useMemoryCache ? createMemoryCache() : createFileSystemCache(),
)

export const getBookList = async () =>
	getDbClient().book.findMany({
		include: { book_name: true, book_abbreviation: true },
		orderBy: { order: 'asc' },
	})

export const getBookListWithCache = withCacheAsync(
	getBookList,
	useMemoryCache ? createMemoryCache() : createFileSystemCache(),
)

export type TBook = Awaited<ReturnType<typeof getBookListWithCache>>[0]

export const getSingleChapterBookList = async () => {
	const bookList = await getBookListWithCache()
	return bookList.filter((book) => book.chapter_count === 1)
}

const getChapter = async (bookCode: string, chapter: number) => {
	const book = await getBookWithCache(bookCode)

	if (!book) throw new Error('Book not found')

	return getDbClient().chapter.findFirst({
		where: {
			book_id: book.book_id,
			chapter,
		},
	})
}

export type TChapter = Exclude<Awaited<ReturnType<typeof getChapter>>, null>

export const getChapterWithCache = withCacheAsync(
	getChapter,
	useMemoryCache ? createMemoryCache() : createFileSystemCache(),
)

export const getChapterList = () => getDbClient().chapter.findMany()

export const getChapterListWithCache = withCacheAsync(
	getChapterList,
	useMemoryCache ? createMemoryCache() : createFileSystemCache(),
)
