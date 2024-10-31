import { useAtomValue, useSetAtom } from 'jotai'
import { range } from 'ramda'
import { useMemo } from 'react'

import { buildReaderUrl } from '~/app/read/lib'
import { currBookAtom, currChapterAtom } from '~/state'

import { ChapterListHeader } from './ChapterListHeader'
import {
	selectedBookAtom,
	showChapterPickerMenu,
} from './chapterPickerMenu.state'
import {
	ChapterList,
	ChapterListItem,
	ChapterListItemLink,
} from './ChapterPickerMenu.styles'
import { useComputeChapterListItemHeight } from './useComputeChapterListItemHeight'

export const ChapterTabView = () => {
	const selectedBook = useAtomValue(selectedBookAtom)

	const chapterList = useMemo(
		() =>
			selectedBook.chapter_count
				? range(1)(selectedBook.chapter_count + 1)
				: [],
		[selectedBook],
	)

	const { chapterListItemRef, chapterListItemHeight } =
		useComputeChapterListItemHeight()

	const setShowChapterPickerMenu = useSetAtom(showChapterPickerMenu)

	const currBook = useAtomValue(currBookAtom)
	const currChapter = useAtomValue(currChapterAtom)

	return (
		<ChapterList
			style={{
				//@ts-ignore
				'--list-item-height': `${chapterListItemHeight}px`,
			}}
		>
			<ChapterListHeader chapterListItemHeight={chapterListItemHeight}>
				{selectedBook.book_name!.value}
			</ChapterListHeader>
			{chapterList?.map((chapter) => {
				const isCurrChapter =
					selectedBook.id === currBook.id && chapter === currChapter

				const chapterUrl = buildReaderUrl({
					bookCode: selectedBook.code,
					chapter,
				})

				return (
					<ChapterListItem
						key={chapter}
						ref={chapter === 1 ? chapterListItemRef : null}
						isCurrChapter={isCurrChapter}
						onClick={() => setShowChapterPickerMenu(false)}
					>
						<ChapterListItemLink href={chapterUrl}>
							{chapter}
						</ChapterListItemLink>
					</ChapterListItem>
				)
			})}
		</ChapterList>
	)
}
