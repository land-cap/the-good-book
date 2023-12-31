import { type TBook } from '~/db'

import { BookListItem, BookListItemContainer } from './ChapterPicker.styles'

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
	bookList.map((book, bookIndex) => (
		<BookListItemContainer
			key={book.code}
			isCurrBook={book.code === currBookCode}
			isFirstEl={bookIndex === 0}
		>
			<BookListItem
				onClick={() => {
					onListItemClick()
					setSelectedBook(book)
				}}
			>
				{book.book_name?.name}
			</BookListItem>
		</BookListItemContainer>
	))
