import { useAtomValue } from 'jotai'
import { splitWhen } from 'ramda'
import { useMemo } from 'react'

import { BleedList } from '~/components'
import type { TBook } from '~/db'
import { bookListAtom } from '~/state'

import { BookList } from './BookList'
import { BookListSectionHeader } from './BookListSectionHeader'

const FIRST_NEW_TESTAMENT_BOOK_CODE = 'mat'

export const BookTabView = () => {
	const bookList = useAtomValue(bookListAtom)

	const [oldTestamentBookList, newTestamentBookList] = useMemo(
		() =>
			splitWhen((book: TBook) => book.code === FIRST_NEW_TESTAMENT_BOOK_CODE)(
				bookList,
			),
		[bookList],
	)

	return (
		<>
			<BleedList.Container>
				<BookListSectionHeader>Vechiul Testament</BookListSectionHeader>
				<BookList bookList={oldTestamentBookList} />
			</BleedList.Container>
			<BleedList.Container>
				<BookListSectionHeader>Noul Testament</BookListSectionHeader>
				<BookList bookList={newTestamentBookList} />
			</BleedList.Container>
		</>
	)
}
