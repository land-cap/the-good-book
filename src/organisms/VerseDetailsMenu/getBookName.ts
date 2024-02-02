'use server'

import { getBookListWithCache } from '~/db'

export const getBookName = async (bookCode: string): Promise<string> => {
	const bookList = await getBookListWithCache()
	const book = bookList.find((book) => book.code === bookCode)
	if (!book) throw new Error(`Book not found: ${bookCode}`)
	if (!book.book_name) throw new Error(`Book name not found: ${bookCode}`)
	return book.book_name.name
}
