import { BleedList } from '~/components/BleedList/BleedList'
import { type TBook } from '~/db'

export const BookList = ({
	bookList,
	onListItemClick,
	setSelectedBook,
	currBookCode,
}: {
	bookList: TBook[]
	onListItemClick: () => void
	setSelectedBook: (book: TBook) => void
	currBookCode: string
}) =>
	bookList.map((book, index) => (
		<BleedList.ItemWrapper
			key={book.code}
			isCurrBook={book.code === currBookCode}
			onClick={() => {
				onListItemClick()
				setSelectedBook(book)
			}}
			mt={index === 0 ? '4' : undefined}
		>
			<BleedList.Item>{book.book_name?.value}</BleedList.Item>
		</BleedList.ItemWrapper>
	))
