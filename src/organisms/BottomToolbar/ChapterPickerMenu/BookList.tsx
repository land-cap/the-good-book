import { useAtomValue, useSetAtom } from 'jotai'

import { BleedList } from '~/components'
import { bookListAtom, currBookCodeAtom } from '~/state'

import { selectedBookIdAtom } from './chapterPickerMenu.state'

export const BookList = ({
	onListItemClick,
}: {
	onListItemClick: () => void
}) => {
	const bookList = useAtomValue(bookListAtom)
	const currBookCode = useAtomValue(currBookCodeAtom)
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
