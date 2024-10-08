import { useAtomValue, useSetAtom } from 'jotai'

import { BleedList } from '~/components'
import { type TBook } from '~/db'
import { currBookCodeAtom } from '~/state'

import { activeTabAtom, selectedBookIdAtom } from './chapterPickerMenu.state'

export const BookList = ({ bookList }: { bookList: TBook[] }) => {
	const currBookCode = useAtomValue(currBookCodeAtom)
	const setSelectedBookId = useSetAtom(selectedBookIdAtom)
	const setActiveTab = useSetAtom(activeTabAtom)

	return bookList.map((book, index) => (
		<BleedList.ItemWrapper
			key={book.code}
			selected={book.code === currBookCode}
			onClick={() => {
				setSelectedBookId(book.id)
				setActiveTab('chapter')
			}}
			mt={index === 0 ? '4' : undefined}
		>
			<BleedList.Item>{book.book_name?.value}</BleedList.Item>
		</BleedList.ItemWrapper>
	))
}
