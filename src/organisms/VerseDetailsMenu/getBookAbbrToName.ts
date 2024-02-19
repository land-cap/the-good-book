'use server'

import { getBookListWithCache } from '~/db'

export const getBookAbbrToName = async () => {
	const bookList = await getBookListWithCache()
	return bookList.reduce(
		(acc, book) =>
			typeof book?.book_abbreviation?.value === 'string' &&
			typeof book?.book_name?.value === 'string'
				? { ...acc, [book.book_abbreviation.value]: book.book_name.value }
				: acc,
		{} as Record<string, string>,
	)
}
