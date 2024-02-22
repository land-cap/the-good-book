'use server'

import { getBookListWithCache } from '~/db'

export const getBookNameToCode = async () => {
	const bookList = await getBookListWithCache()
	return bookList.reduce(
		(acc, book) =>
			typeof book?.book_name?.value === 'string'
				? { ...acc, [book.book_name.value]: book.code }
				: acc,
		{} as Record<string, string>,
	)
}
