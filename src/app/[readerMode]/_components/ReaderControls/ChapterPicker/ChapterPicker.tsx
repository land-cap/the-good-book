'use client'

import { Tabs } from '@ark-ui/react'
import * as dialog from '@zag-js/dialog'
import { normalizeProps, Portal, useMachine } from '@zag-js/react'
import { useParams } from 'next/navigation'
import { equals, range, splitWhen } from 'ramda'
import { useEffect, useMemo, useRef, useState } from 'react'
import { css } from 'styled-system/css'
import { macrogrid } from 'styled-system/patterns'

import type { TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import { Icon } from '~/components'
import type { TBook } from '~/db'

import { BookList } from './BookList'
import { BookListSectionHeader } from './BookListSectionHeader'
import { ChapterListHeader } from './ChapterListHeader'
import {
	BookListContainer,
	ChapterList,
	ChapterListItem,
	ChapterListItemLink,
	DialogCloseTrigger,
	DialogContainer,
	DialogPositioner,
	DialogTrigger,
	TabsContent,
	TabsRoot,
	TabsTrigger,
} from './ChapterPicker.styles'
import { Header } from './Header'
import { useCloseChapterPickerOnParamChange } from './useCloseChapterPickerOnParamChange'
import { useComputeChapterListItemHeight } from './useComputeChapterListItemHeight'
import { useDisableBodyScrollWhileDialogIsOpen } from './useDisableBodyScrollWhileDialogIsOpen'

export type TChapterPickerTab = 'book' | 'chapter'

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

	const [state, send] = useMachine(dialog.machine({ id: '1' }))

	const dialogApi = dialog.connect(state, send, normalizeProps)

	const [tab, setTab] = useState<TChapterPickerTab>('book')

	const [isDialogOpen, setIsDialogOpen] = useState(false)

	useDisableBodyScrollWhileDialogIsOpen({ isDialogOpen, setTab })

	useCloseChapterPickerOnParamChange({
		closeDialog: () => setIsDialogOpen(false),
		currBookCode: currBook.code,
		currChapter,
		isDialogOpen,
	})

	const [selectedBook, setSelectedBook] = useState<TBook>(currBook)

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

	const { chapterListItemRef, chapterListItemHeight } =
		useComputeChapterListItemHeight()

	const params = useParams<TReaderPageParams>()

	const [paramsValueBeforeDialogOpened, setParamsValueBeforeDialogOpened] =
		useState(useRef(params).current)

	const handleDialogExitComplete = () => {
		const hasParamsChanged = !equals(paramsValueBeforeDialogOpened, params)
		hasParamsChanged && Object.defineProperty(window, 'scrollY', { value: 0 })
	}

	return (
		<>
			<DialogTrigger {...dialogApi.triggerProps}>
				{currBook.book_name?.name} {currChapter}
			</DialogTrigger>
			{dialogApi.isOpen && (
				<Portal>
					<DialogPositioner {...dialogApi.positionerProps}>
						<DialogContainer {...dialogApi.contentProps}>
							<TabsRoot
								value={tab}
								onValueChange={({ value }) =>
									setTab(value as 'book' | 'chapter')
								}
							>
								<Header>
									<Tabs.List className={css({ h: 'full' })}>
										<TabsTrigger
											value="book"
											onClick={() => setSelectedBook(currBook)}
										>
											Book
										</TabsTrigger>
										<TabsTrigger
											value="chapter"
											onClick={() => setSelectedBook(currBook)}
										>
											Chapter
										</TabsTrigger>
									</Tabs.List>
									<DialogCloseTrigger {...dialogApi.closeTriggerProps}>
										<Icon size={6} name="close" />
									</DialogCloseTrigger>
								</Header>
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
										style={{
											paddingBottom: `calc(${
												(chapterListItemHeight - 16) / 2
											}px + env(safe-area-inset-bottom,0))`,
										}}
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

											const chapterUrl = `/${readerMode}/${selectedBook.code}/${chapter}`

											return (
												<ChapterListItem
													key={chapter}
													ref={chapter === 1 ? chapterListItemRef : null}
													isCurrChapter={isCurrChapter}
												>
													<ChapterListItemLink href={chapterUrl}>
														{chapter}
													</ChapterListItemLink>
												</ChapterListItem>
											)
										})}
									</ChapterList>
								</TabsContent>
							</TabsRoot>
						</DialogContainer>
					</DialogPositioner>
				</Portal>
			)}
		</>
	)
}
