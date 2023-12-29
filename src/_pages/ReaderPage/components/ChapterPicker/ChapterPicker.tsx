'use client'

import { Dialog, Portal, Tabs } from '@ark-ui/react'
import { useParams } from 'next/navigation'
import { splitWhen } from 'ramda'
import { useEffect, useMemo, useRef, useState } from 'react'
import { macrogrid } from 'styled-system/patterns'
import { ChapterPicker__ListSectionLabel } from '~/_pages/ReaderPage/components/ChapterPicker/ChapterPicker__ListSectionLabel'
import { ChapterPickerChapterList } from '~/_pages/ReaderPage/components/ChapterPicker/ChapterPickerChapterList'
import { ChapterPickerChapterListItem } from '~/_pages/ReaderPage/components/ChapterPicker/ChapterPickerChapterListItem'
import type { TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import type { getBookList, TBook } from '~/db'
import { ChapterPickerBookList } from './ChapterPickerBookList'
import { ChapterPickerBookListItem } from './ChapterPickerBookListItem'
import { ChapterPickerContainer } from './ChapterPickerContainer'
import { ChapterPickerHeader } from './ChapterPickerHeader'
import { ChapterPickerTrigger } from './ChapterPickerTrigger'

const tabsContentCss = macrogrid({
	'&[data-state=closed]': {
		display: 'none',
	},
	gridColumn: 'fullbleed',
	h: 'full',
	overflowY: 'scroll',
})

export const ChapterPicker = ({
	bookName,
	chapter,
	bookList,
}: {
	chapter: number
	bookName: string
	bookList: TBook[]
}) => {
	const { readerMode } = useParams<TReaderPageParams>()

	const [tab, setTab] = useState<string | null>('book')

	const [selectedBook, setSelectedBook] =
		useState<Awaited<ReturnType<typeof getBookList>>[0]>()

	const [oldTestamentBookList, newTestamentBookList] = useMemo(
		() => splitWhen((book: TBook) => book.book.code === 'MAT')(bookList),
		[bookList],
	)

	useEffect(() => {
		const currBook = bookList.find((book) => book.name === bookName)
		setSelectedBook(currBook)
	}, [bookList, bookName])

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
			<ChapterPickerTrigger>
				{bookName} {chapter}
			</ChapterPickerTrigger>
			<Portal>
				<ChapterPickerContainer>
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
						<ChapterPickerHeader />
						<Tabs.Content value="book" className={tabsContentCss}>
							<ChapterPickerBookList>
								<ChapterPicker__ListSectionLabel>
									Vechiul Testament
								</ChapterPicker__ListSectionLabel>
								{oldTestamentBookList.map((book) => (
									<ChapterPickerBookListItem
										key={book.book.code}
										onClick={() => {
											setSelectedBook(book)
											setTab('chapter')
										}}
									>
										{book.name}
									</ChapterPickerBookListItem>
								))}
							</ChapterPickerBookList>
							<ChapterPickerBookList>
								<ChapterPicker__ListSectionLabel>
									Noul Testament
								</ChapterPicker__ListSectionLabel>
								{newTestamentBookList.map((book) => (
									<ChapterPickerBookListItem
										key={book.book.code}
										onClick={() => {
											setSelectedBook(book)
											setTab('chapter')
										}}
									>
										{book.name}
									</ChapterPickerBookListItem>
								))}
							</ChapterPickerBookList>
						</Tabs.Content>
						<Tabs.Content value="chapter" className={tabsContentCss}>
							<ChapterPickerChapterList itemHeight={chapterListItemHeight}>
								{chapterList?.map((_, i) => (
									<ChapterPickerChapterListItem
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
										href={`/${readerMode}/${selectedBook?.book.code.toLowerCase()}/${
											i + 1
										}`}
									>
										{i + 1}
									</ChapterPickerChapterListItem>
								))}
							</ChapterPickerChapterList>
						</Tabs.Content>
					</Tabs.Root>
				</ChapterPickerContainer>
			</Portal>
		</Dialog.Root>
	)
}
