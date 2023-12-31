'use client'

import { Tabs } from '@ark-ui/react'
import * as dialog from '@zag-js/dialog'
import { normalizeProps, Portal, useMachine } from '@zag-js/react'
import { useParams } from 'next/navigation'
import { range, splitWhen } from 'ramda'
import { useEffect, useMemo, useRef, useState } from 'react'
import { css, cx } from 'styled-system/css'
import { flex, macrogrid } from 'styled-system/patterns'

import type { TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import {
	ChapterListItem,
	ChapterListItemLink,
} from '~/components/organisms/ReaderControls/ChapterPicker/ChapterListItem_ChapterPicker'
import type { getBookList, TBook } from '~/db'

import { BookList_ChapterPicker } from './BookList_ChapterPicker'
import { BookListItem_ChapterPicker } from './BookListItem_ChapterPicker'
import { BookListSectionHeader_ChapterPicker } from './BookListSectionHeader_ChapterPicker'
import { ChapterList_ChapterPicker } from './ChapterList_ChapterPicker'
import { ChapterListHeader_ChapterPicker } from './ChapterListHeader_ChapterPicker'
import {
	Container_ChapterPicker,
	Positioner_ChapterPicker,
} from './Container_ChapterPicker'
import { Header_ChapterPicker } from './Header_ChapterPicker'
import { Trigger_ChapterPicker } from './Trigger_ChapterPicker'

const tabsContentCss = css({
	'&[data-state=closed]': {
		display: 'none',
	},
	fixStickyContainer: true,
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
	const [state, send] = useMachine(
		dialog.machine({
			id: '1',
			onOpenChange: ({ open }) => {
				if (open) {
					document.body.style.overflow = 'clip'
				} else {
					document.body.style.overflow = 'auto'
					setTab('book')
				}
			},
		}),
	)

	const dialogApi = dialog.connect(state, send, normalizeProps)

	const { readerMode } = useParams<TReaderPageParams>()

	useEffect(() => {
		if (!dialogApi.isOpen) {
		}
	}, [dialogApi.isOpen])

	useEffect(() => {
		if (dialogApi.isOpen) {
			document.body.style.overflow = 'clip'
		} else {
			document.body.style.overflow = 'auto'
		}
	}, [dialogApi.isOpen])

	useEffect(() => {
		dialogApi.close()
		//	 eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currBook, currChapter])

	const [tab, setTab] = useState<string | null>('book')

	const [selectedBook, setSelectedBook] =
		useState<Awaited<ReturnType<typeof getBookList>>[0]>(currBook)

	useEffect(() => {
		setSelectedBook(currBook)
	}, [currBook])

	const [oldTestamentBookList, newTestamentBookList] = useMemo(
		() => splitWhen((book: TBook) => book.code === 'mat')(bookList),
		[bookList],
	)

	const chapterList = useMemo(
		() => range(1)(selectedBook.chapter_count + 1),
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
		<>
			<Trigger_ChapterPicker {...dialogApi.triggerProps}>
				{currBook.book_name?.name} {currChapter}
			</Trigger_ChapterPicker>
			<Portal>
				{dialogApi.isOpen && (
					<Positioner_ChapterPicker {...dialogApi.positionerProps}>
						<Container_ChapterPicker {...dialogApi.contentProps}>
							<Tabs.Root
								value={tab}
								onValueChange={(e) => setTab(e.value)}
								className={flex({
									direction: 'column',
									h: 'full',
									overflowY: 'hidden',
								})}
							>
								<Header_ChapterPicker
									onTabsTriggerClick={() => setSelectedBook(currBook)}
									closeButtonProps={dialogApi.closeTriggerProps}
								/>
								<Tabs.Content
									value="book"
									className={cx(
										tabsContentCss,
										css({
											pb: 'calc(token(spacing.4) + token(spacing.safe_area_bottom))',
										}),
									)}
								>
									<BookList_ChapterPicker>
										<BookListSectionHeader_ChapterPicker>
											Vechiul Testament
										</BookListSectionHeader_ChapterPicker>
										{oldTestamentBookList.map((book, bookIndex) => (
											<BookListItem_ChapterPicker
												key={book.code}
												onClick={() => {
													setSelectedBook(book)
													setTab('chapter')
												}}
												isCurrBook={book.code === currBook.code}
												isFirstEl={bookIndex === 0}
											>
												{book.book_name?.name}
											</BookListItem_ChapterPicker>
										))}
									</BookList_ChapterPicker>
									<BookList_ChapterPicker>
										<BookListSectionHeader_ChapterPicker>
											Noul Testament
										</BookListSectionHeader_ChapterPicker>
										{newTestamentBookList.map((book, bookIndex) => (
											<BookListItem_ChapterPicker
												key={book.code}
												onClick={() => {
													setSelectedBook(book)
													setTab('chapter')
												}}
												isCurrBook={book.code === currBook.code}
												isFirstEl={bookIndex === 0}
											>
												{book.book_name?.name}
											</BookListItem_ChapterPicker>
										))}
									</BookList_ChapterPicker>
								</Tabs.Content>
								<Tabs.Content
									value="chapter"
									className={cx(tabsContentCss, macrogrid())}
								>
									<ChapterList_ChapterPicker
										chapterListItemHeight={chapterListItemHeight}
									>
										<ChapterListHeader_ChapterPicker
											chapterListItemHeight={chapterListItemHeight}
										>
											{selectedBook.book_name?.name}
										</ChapterListHeader_ChapterPicker>
										{chapterList?.map((chapter) => {
											const isCurrChapter =
												selectedBook.id === currBook.id &&
												chapter === currChapter

											return (
												<ChapterListItem
													key={chapter}
													ref={
														chapter === 1
															? (el) => {
																	if (el) {
																		chapterListItemRef.current = el
																		const height =
																			el.getBoundingClientRect().height
																		setChapterListItemHeight(height)
																	}
															  }
															: undefined
													}
													isCurrChapter={isCurrChapter}
												>
													<ChapterListItemLink
														href={`/${readerMode}/${selectedBook.code}/${chapter}`}
													>
														{chapter}
													</ChapterListItemLink>
												</ChapterListItem>
											)
										})}
									</ChapterList_ChapterPicker>
								</Tabs.Content>
							</Tabs.Root>
						</Container_ChapterPicker>
					</Positioner_ChapterPicker>
				)}
			</Portal>
		</>
	)
}
