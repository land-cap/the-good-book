'use server'

import { getBookListWithCache } from '~/db'
import {
	createFileSystemCache,
	createMemoryCache,
	withCacheAsync,
} from '~/helpers'

const useMemoryCache = process.env.USE_MEMORY_CACHE === 'true'

export const getBookNameByCode = withCacheAsync(
	async (bookCode: string): Promise<string> => {
		const bookList = await getBookListWithCache()
		const book = bookList.find((book) => book.code === bookCode)
		if (!book) throw new Error(`Book not found: ${bookCode}`)
		if (!book.book_name) throw new Error(`Book name not found: ${bookCode}`)
		return book.book_name.value
	},
	useMemoryCache ? createMemoryCache() : createFileSystemCache(),
)
