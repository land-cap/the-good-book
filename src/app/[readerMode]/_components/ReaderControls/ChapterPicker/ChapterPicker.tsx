'use client'

import { Dialog, Portal } from '@ark-ui/react'
import { useParams } from 'next/navigation'
import { range, splitWhen } from 'ramda'
import { useEffect, useMemo, useState } from 'react'
import { css } from 'styled-system/css'
import { macrogrid } from 'styled-system/patterns'

import type { TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import type { TBook } from '~/db'

import { BookList } from './BookList'
import { BookListSectionHeader } from './BookListSectionHeader'
import { ChapterListHeader } from './ChapterListHeader'
import {
	BookListContainer,
	ChapterList,
	ChapterListItem,
	ChapterListItemLink,
	DialogContainer,
	DialogPositioner,
	DialogTrigger,
	TabsContent,
	TabsRoot,
} from './ChapterPicker.styles'
import { Header } from './Header'
import { useCloseChapterPickerOnParamChange } from './useCloseChapterPickerOnParamChange'
import { useComputeChapterListItemHeight } from './useComputeChapterListItemHeight'

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

	const [tab, setTab] = useState<TChapterPickerTab>('book')

	const [isDialogOpen, setIsDialogOpen] = useState(false)

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

	return (
		<Dialog.Root
			open={isDialogOpen}
			lazyMount
			onExitComplete={() => {
				setTab('book')
			}}
		>
			<DialogTrigger>
				{currBook.book_name?.name} {currChapter}
			</DialogTrigger>
			<Portal>
				<DialogPositioner>
					<DialogContainer>
						<TabsRoot
							value={tab}
							onValueChange={({ value }) => setTab(value as 'book' | 'chapter')}
						>
							<Header onTabsTriggerClick={() => setSelectedBook(currBook)} />
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
									<BookListSectionHeader>Noul Testament</BookListSectionHeader>
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
											selectedBook.id === currBook.id && chapter === currChapter

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
		</Dialog.Root>
	)
}
