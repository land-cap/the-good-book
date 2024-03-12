'use client'

import { Dialog, Portal } from '@ark-ui/react'
import { useSetAtom } from 'jotai'
import { useParams } from 'next/navigation'
import { equals, range, splitWhen } from 'ramda'
import { useEffect, useMemo, useRef, useState } from 'react'
import { css, cx } from 'styled-system/css'
import { macrogrid } from 'styled-system/patterns'
import { button } from 'styled-system/recipes'

import type { TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import { BleedList, Menu } from '~/components'
import type { TBook } from '~/db'
import { isScrollLockedAtom } from '~/state'

import { BookList } from './BookList'
import { BookListSectionHeader } from './BookListSectionHeader'
import { ChapterListHeader } from './ChapterListHeader'
import {
	ChapterList,
	ChapterListItem,
	ChapterListItemLink,
	TabsContent,
	TabsRoot,
} from './ChapterPickerMenu.styles'
import { Header } from './Header'
import { useComputeChapterListItemHeight } from './useComputeChapterListItemHeight'

export type TChapterPickerTab = 'book' | 'chapter'

export const ChapterPickerMenu = ({
	currBook,
	currChapter,
	bookList,
}: {
	currChapter: number
	currBook: TBook
	bookList: TBook[]
}) => {
	const [tab, setTab] = useState<TChapterPickerTab>('book')

	const [isDialogOpen, setIsDialogOpen] = useState(false)

	const setIsBodyScrollLocked = useSetAtom(isScrollLockedAtom)
	useEffect(
		() => setIsBodyScrollLocked(isDialogOpen),
		[isDialogOpen, setIsBodyScrollLocked],
	)

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

	const paramsValueBeforeDialogOpened = useRef(params)

	const handleDialogExitComplete = () => {
		const hasParamsChanged = !equals(
			paramsValueBeforeDialogOpened.current,
			params,
		)
		setTab('book')
		if (hasParamsChanged) {
			document.body.scrollIntoView({ behavior: 'instant' })
		}
	}

	return (
		<Dialog.Root
			preventScroll={false}
			open={isDialogOpen}
			onOpenChange={({ open }) => {
				setIsDialogOpen(open)
				if (open) {
					paramsValueBeforeDialogOpened.current = params
				}
			}}
			onExitComplete={handleDialogExitComplete}
		>
			<Dialog.Trigger
				className={cx(button(), css({ h: 'full', flexGrow: 1 }))}
				onClick={() => setIsDialogOpen(true)}
			>
				{currBook.book_name?.value} {currChapter}
			</Dialog.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Container>
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
								<BleedList.Container>
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
								</BleedList.Container>
								<BleedList.Container>
									<BookListSectionHeader>Noul Testament</BookListSectionHeader>
									<BookList
										bookList={newTestamentBookList}
										onListItemClick={() => {
											setTab('chapter')
										}}
										setSelectedBook={setSelectedBook}
										currBookCode={currBook.code}
									/>
								</BleedList.Container>
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
										{selectedBook.book_name?.value}
									</ChapterListHeader>
									{chapterList?.map((chapter) => {
										const isCurrChapter =
											selectedBook.id === currBook.id && chapter === currChapter

										const chapterUrl = `/${selectedBook.code}/${chapter}`

										return (
											<ChapterListItem
												key={chapter}
												ref={chapter === 1 ? chapterListItemRef : null}
												isCurrChapter={isCurrChapter}
												onClick={() => setIsDialogOpen(false)}
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
					</Menu.Container>
				</Menu.Positioner>
			</Portal>
		</Dialog.Root>
	)
}
