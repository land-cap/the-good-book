'use client'

import { Dialog, Portal } from '@ark-ui/react'
import { useAtomValue, useSetAtom } from 'jotai'
import { useParams } from 'next/navigation'
import { equals, range } from 'ramda'
import { useEffect, useMemo, useRef, useState } from 'react'
import { css, cx } from 'styled-system/css'
import { macrogrid } from 'styled-system/patterns'
import { button } from 'styled-system/recipes'

import type { TReaderPageParams } from '~/_pages'
import { FullscreenMenu } from '~/components'
import { useBuildReaderUrl } from '~/hooks'
import { currBookAtom, currChapterAtom, isScrollLockedAtom } from '~/state'

import { BookTabView } from './BookTabView'
import { ChapterListHeader } from './ChapterListHeader'
import { selectedBookAtom, selectedBookIdAtom } from './chapterPickerMenu.state'
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

export const ChapterPickerMenu = () => {
	const [tab, setTab] = useState<TChapterPickerTab>('book')

	const [isDialogOpen, setIsDialogOpen] = useState(false)

	const setIsBodyScrollLocked = useSetAtom(isScrollLockedAtom)
	useEffect(
		() => setIsBodyScrollLocked(isDialogOpen),
		[isDialogOpen, setIsBodyScrollLocked],
	)

	const currBook = useAtomValue(currBookAtom)

	const setSelectedBookId = useSetAtom(selectedBookIdAtom)

	useEffect(() => {
		currBook && setSelectedBookId(currBook.id)
	}, [currBook, setSelectedBookId])

	const selectedBook = useAtomValue(selectedBookAtom)

	const chapterList = useMemo(
		() =>
			selectedBook?.chapter_count
				? range(1)(selectedBook.chapter_count + 1)
				: [],
		[selectedBook],
	)

	const { chapterListItemRef, chapterListItemHeight } =
		useComputeChapterListItemHeight()

	const params = useParams<TReaderPageParams>()

	const paramsValueBeforeDialogOpened = useRef(params)

	const currChapter = useAtomValue(currChapterAtom)

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

	const buildReaderUrl = useBuildReaderUrl()

	if (!currBook) {
		throw new Error('Missing current book data.')
	}

	return (
		<Dialog.Root
			id="chapter-picker-menu"
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
				<FullscreenMenu.Positioner>
					<FullscreenMenu.Content>
						<TabsRoot
							value={tab}
							onValueChange={({ value }) => setTab(value as 'book' | 'chapter')}
						>
							<Header
								onTabsTriggerClick={() => setSelectedBookId(currBook.id)}
							/>
							<TabsContent
								value="book"
								className={css({
									pb: 'calc(token(spacing.4) + token(spacing.safe_area_bottom))',
								})}
							>
								<BookTabView setTab={setTab} />
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
										{selectedBook?.book_name?.value}
									</ChapterListHeader>
									{chapterList?.map((chapter) => {
										const isCurrChapter =
											selectedBook?.id === currBook.id &&
											chapter === currChapter

										const chapterUrl = buildReaderUrl({
											bookCode: selectedBook?.code,
											chapter,
										})

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
					</FullscreenMenu.Content>
				</FullscreenMenu.Positioner>
			</Portal>
		</Dialog.Root>
	)
}
