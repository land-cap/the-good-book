'use server'

import { getBookListWithCache } from '~/db'

export const getBookCode = async (bookName: string): Promise<string> => {
	const bookList = await getBookListWithCache()
	const book = bookList.find((book) => book?.book_name?.value === bookName)
	if (!book) throw new Error(`Book not found: ${bookName}`)
	if (!book.book_name) throw new Error(`Book name not found: ${bookName}`)
	return book.book_name.value
}
