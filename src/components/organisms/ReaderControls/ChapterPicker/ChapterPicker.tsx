'use client'

import * as modal from '@zag-js/dialog'
import { normalizeProps, Portal, useMachine } from '@zag-js/react'
import { useParams } from 'next/navigation'
import { range, splitWhen } from 'ramda'
import { useEffect, useMemo, useRef, useState } from 'react'
import { css } from 'styled-system/css'
import { macrogrid } from 'styled-system/patterns'

import type { TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import { useCloseChapterPickerOnParamChange } from '~/components/organisms/ReaderControls/ChapterPicker/useCloseChapterPickerOnParamChange'
import type { getBookList, TBook } from '~/db'

import { BookList } from './BookList'
import { BookListSectionHeader } from './BookListSectionHeader'
import { ChapterListHeader } from './ChapterListHeader'
import {
	BookListContainer,
	ChapterList,
	ChapterListItem,
	ChapterListItemLink,
	OverlayContainer,
	OverlayPositioner,
	TabsContent,
	TabsRoot,
} from './ChapterPicker.styles'
import { Header } from './Header'
import { ModalTrigger } from './ModalTrigger'

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

	const [tab, setTab] = useState<'book' | 'chapter'>('book')

	const handleModalOpenChange = ({ open }: { open: boolean }) => {
		if (open) {
			document.body.style.overflow = 'clip'
		} else {
			document.body.style.overflow = 'auto'
			setTab('book')
		}
	}

	const [state, send] = useMachine(
		modal.machine({
			id: 'chapter-picker',
			onOpenChange: handleModalOpenChange,
			preventScroll: false,
		}),
	)

	const modalApi = modal.connect(state, send, normalizeProps)

	useCloseChapterPickerOnParamChange(
		currBook.code,
		currChapter,
		modalApi.isOpen,
		//eslint-disable-next-line @typescript-eslint/unbound-method
		modalApi.close,
	)

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

	const chapterListPaddingBottom = `calc(${
		(chapterListItemHeight - 16) / 2
	}px + env(safe-area-inset-bottom,0))`

	return (
		<>
			<ModalTrigger {...modalApi.triggerProps}>
				{currBook.book_name?.name} {currChapter}
			</ModalTrigger>
			<Portal>
				{modalApi.isOpen && (
					<OverlayPositioner {...modalApi.positionerProps}>
						<OverlayContainer {...modalApi.contentProps}>
							<TabsRoot
								value={tab}
								onValueChange={({ value }) =>
									setTab(value as 'book' | 'chapter')
								}
							>
								<Header
									onTabsTriggerClick={() => setSelectedBook(currBook)}
									closeButtonProps={modalApi.closeTriggerProps}
								/>
								<TabsContent
									value="book"
									className={css({
										pb: 'calc(token(spacing.4) + token(spacing.safe_area_bottom))',
									})}
								>
									<BookListContainer>
										<BookListSectionHeader>
											Vechiul Testament
										</BookListSectionHeader>
										<BookList
											bookList={oldTestamentBookList}
											onListItemClick={() => {
												setTab('chapter')
											}}
											setSelectedBook={setSelectedBook}
											currBookCode={currBook.code}
										/>
									</BookListContainer>
									<BookListContainer>
										<BookListSectionHeader>
											Noul Testament
										</BookListSectionHeader>
										<BookList
											bookList={newTestamentBookList}
											onListItemClick={() => {
												setTab('chapter')
											}}
											setSelectedBook={setSelectedBook}
											currBookCode={currBook.code}
										/>
									</BookListContainer>
								</TabsContent>
								<TabsContent value="chapter" className={macrogrid()}>
									<ChapterList
										style={{ paddingBottom: chapterListPaddingBottom }}
									>
										<ChapterListHeader
											chapterListItemHeight={chapterListItemHeight}
										>
											{selectedBook.book_name?.name}
										</ChapterListHeader>
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
									</ChapterList>
								</TabsContent>
							</TabsRoot>
						</OverlayContainer>
					</OverlayPositioner>
				)}
			</Portal>
		</>
	)
}
