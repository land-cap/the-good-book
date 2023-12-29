'use client'

import { Dialog, Portal, Tabs } from '@ark-ui/react'
import { useParams } from 'next/navigation'
import { splitWhen } from 'ramda'
import { useEffect, useMemo, useRef, useState } from 'react'
import { macrogrid } from 'styled-system/patterns'

import { ChapterList_ChapterPicker } from '~/_pages/ReaderPage/components/ChapterPicker/ChapterList_ChapterPicker'
import { ChapterListItem_ChapterPicker } from '~/_pages/ReaderPage/components/ChapterPicker/ChapterListItem_ChapterPicker'
import { ListSectionLabel_ChapterPicker } from '~/_pages/ReaderPage/components/ChapterPicker/ListSectionLabel_ChapterPicker'
import type { TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import type { getBookList, TBook } from '~/db'

import { BookList_ChapterPicker } from './BookList_ChapterPicker'
import { BookListItem_ChapterPicker } from './BookListItem_ChapterPicker'
import { Container_ChapterPicker } from './Container_ChapterPicker'
import { Header_ChapterPicker } from './Header_ChapterPicker'
import { Trigger_ChapterPicker } from './Trigger_ChapterPicker'

const tabsContentCss = macrogrid({
	'&[data-state=closed]': {
		display: 'none',
	},
	fixStickyContainer: true,
	gridColumn: 'fullbleed',
	h: 'full',
	overflowY: 'scroll',
})

export const ChapterPicker = ({
	currBook,
	currChapter,
	bookList,
}: {
	currChapter: number
	currBook: TBook
	bookList: TBook[]
}) => {
	const { readerMode } = useParams<TReaderPageParams>()

	const [tab, setTab] = useState<string | null>('book')

	const [selectedBook, setSelectedBook] =
		useState<Awaited<ReturnType<typeof getBookList>>[0]>()

	useEffect(() => {
		setSelectedBook(currBook)
	}, [currBook])

	const [oldTestamentBookList, newTestamentBookList] = useMemo(
		() => splitWhen((book: TBook) => book.book.code === 'MAT')(bookList),
		[bookList],
	)

	const chapterList = useMemo(
		() => selectedBook && Array(selectedBook.book.chapter_count).fill(0),
		[selectedBook],
	)

	const chapterListItemRef = useRef<HTMLLIElement>()

	const [chapterListItemHeight, setChapterListItemHeight] = useState<number>(0)

	useEffect(() => {
		const handleWindowResize = () => {
			chapterListItemRef.current &&
				setChapterListItemHeight(
					chapterListItemRef.current?.getBoundingClientRect().height,
				)
		}
		window.addEventListener('resize', handleWindowResize)
		return () => window.removeEventListener('resize', handleWindowResize)
	}, [])

	return (
		<Dialog.Root>
			<Trigger_ChapterPicker>
				{currBook.name} {currChapter}
			</Trigger_ChapterPicker>
			<Portal>
				<Container_ChapterPicker>
					<Tabs.Root
						value={tab}
						onValueChange={(e) => setTab(e.value)}
						className={macrogrid({
							gridColumn: 'fullbleed',
							gridTemplateRows: 'auto minmax(auto,1fr)',
							h: 'full',
							overflowY: 'hidden',
						})}
					>
						<Header_ChapterPicker
							resetSelectedBook={() => setSelectedBook(currBook)}
						/>
						<Tabs.Content value="book" className={tabsContentCss}>
							<BookList_ChapterPicker>
								<ListSectionLabel_ChapterPicker>
									Vechiul Testament
								</ListSectionLabel_ChapterPicker>
								{oldTestamentBookList.map((book) => (
									<BookListItem_ChapterPicker
										key={book.book.code}
										isCurrBook={book.name === currBook.name}
										onClick={() => {
											setSelectedBook(book)
											setTab('chapter')
										}}
									>
										{book.name}
									</BookListItem_ChapterPicker>
								))}
							</BookList_ChapterPicker>
							<BookList_ChapterPicker>
								<ListSectionLabel_ChapterPicker>
									Noul Testament
								</ListSectionLabel_ChapterPicker>
								{newTestamentBookList.map((book) => (
									<BookListItem_ChapterPicker
										isCurrBook={book.book.code === currBook.book.code}
										key={book.book.code}
										onClick={() => {
											setSelectedBook(book)
											setTab('chapter')
										}}
									>
										{book.name}
									</BookListItem_ChapterPicker>
								))}
							</BookList_ChapterPicker>
						</Tabs.Content>
						<Tabs.Content value="chapter" className={tabsContentCss}>
							<ChapterList_ChapterPicker itemHeight={chapterListItemHeight}>
								{chapterList?.map((_, i) => {
									const chapter = i + 1

									const isCurrChapter =
										selectedBook?.id === currBook.id && chapter === currChapter

									return (
										<ChapterListItem_ChapterPicker
											key={i}
											ref={
												i === 0
													? (el) => {
															if (el) {
																chapterListItemRef.current = el
																const height = el.getBoundingClientRect().height
																setChapterListItemHeight(height)
															}
													  }
													: undefined
											}
											isCurrChapter={isCurrChapter}
											href={`/${readerMode}/${selectedBook?.book.code.toLowerCase()}/${chapter}`}
										>
											{chapter}
										</ChapterListItem_ChapterPicker>
									)
								})}
							</ChapterList_ChapterPicker>
						</Tabs.Content>
					</Tabs.Root>
				</Container_ChapterPicker>
			</Portal>
		</Dialog.Root>
	)
}
