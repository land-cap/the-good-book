import { useAtomValue } from 'jotai'
import { splitWhen } from 'ramda'
import { type Dispatch, type SetStateAction, useMemo } from 'react'

import { BleedList } from '~/components'
import type { TBook } from '~/db'
import { bookListAtom } from '~/state'

import { BookList } from './BookList'
import { BookListSectionHeader } from './BookListSectionHeader'
import { type TChapterPickerTab } from './ChapterPickerMenu'

export const BookTabContent = ({
	setTab,
	currBook,
}: {
	setTab: Dispatch<SetStateAction<TChapterPickerTab>>
	currBook: TBook
}) => {
	const bookList = useAtomValue(bookListAtom)

	const [oldTestamentBookList, newTestamentBookList] = useMemo(
		() => splitWhen((book: TBook) => book.code === 'mat')(bookList),
		[bookList],
	)

	return (
		<>
			<BleedList.Container>
				<BookListSectionHeader>Vechiul Testament</BookListSectionHeader>
				<BookList
					bookList={oldTestamentBookList}
					onListItemClick={() => {
						setTab('chapter')
					}}
					currBookCode={currBook.code}
				/>
			</BleedList.Container>
			<BleedList.Container>
				<BookListSectionHeader>Noul Testament</BookListSectionHeader>
				<BookList
					bookList={newTestamentBookList}
					onListItemClick={() => {
						setTab('chapter')
					}}
					currBookCode={currBook.code}
				/>
			</BleedList.Container>
		</>
	)
}
