import { useSetAtom } from 'jotai'

import { BleedList } from '~/components/BleedList/BleedList'
import { type TBook } from '~/db'

import { selectedBookIdAtom } from './ChapterPickerMenu.state'

export const BookList = ({
	bookList,
	onListItemClick,
	currBookCode,
}: {
	bookList: TBook[]
	onListItemClick: () => void
	currBookCode: string
}) => {
	const setSelectedBookId = useSetAtom(selectedBookIdAtom)

	return bookList.map((book, index) => (
		<BleedList.ItemWrapper
			key={book.code}
			selected={book.code === currBookCode}
			onClick={() => {
				onListItemClick()
				setSelectedBookId(book.id)
			}}
			mt={index === 0 ? '4' : undefined}
		>
			<BleedList.Item>{book.book_name?.value}</BleedList.Item>
		</BleedList.ItemWrapper>
	))
}
