import { useAtomValue } from 'jotai'
import { splitWhen } from 'ramda'
import { useMemo } from 'react'

import { BleedList } from '~/components'
import type { TBook } from '~/db'
import { bookListAtom, currBookAtom } from '~/state'

import { BookList } from './BookList'
import { BookListSectionHeader } from './BookListSectionHeader'

export const BookTabView = () => {
	const bookList = useAtomValue(bookListAtom)

	const [oldTestamentBookList, newTestamentBookList] = useMemo(
		() => splitWhen((book: TBook) => book.code === 'mat')(bookList),
		[bookList],
	)

	const currBook = useAtomValue(currBookAtom)

	return (
		<>
			<BleedList.Container>
				<BookListSectionHeader>Vechiul Testament</BookListSectionHeader>
				<BookList
					bookList={oldTestamentBookList}
					currBookCode={currBook.code}
				/>
			</BleedList.Container>
			<BleedList.Container>
				<BookListSectionHeader>Noul Testament</BookListSectionHeader>
				<BookList
					bookList={newTestamentBookList}
					currBookCode={currBook.code}
				/>
			</BleedList.Container>
		</>
	)
}
