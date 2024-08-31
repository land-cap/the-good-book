'use client'

import { useAtom, useAtomValue } from 'jotai'
import { hstack, subgrid } from 'styled-system/patterns'

import type { TBook } from '~/db'
import {
	currBookAtom,
	currChapterAtom,
	isFirstChapterAtom,
	isLastChapterAtom,
	nextChapterUrlAtom,
	prevChapterUrlAtom,
} from '~/state'

import { BottomToolbarContainer } from './BottomToolbarContainer'
import { ChapterPickerMenuRoot } from './ChapterPickerMenu'
import { ReaderNavButton } from './ReaderNavButton'
import { ReturnFromReferenceFab } from './ReturnFromReferenceFab'

export const BottomToolbar = ({ bookList }: { bookList: TBook[] }) => {
	const chapter = useAtomValue(currChapterAtom)

	const currBook = useAtomValue(currBookAtom)

	const currBookIndex = bookList.findIndex(
		(book) => book.book_name?.value === currBook.book_name?.value,
	)

	const currBookChapterCount = bookList[currBookIndex]?.chapter_count

	const prevChapterUrl = useAtomValue(prevChapterUrlAtom)

	const nextChapterUrl = useAtomValue(nextChapterUrlAtom)

	const [isFirstChapterInBible, setIsFirstChapterInBible] =
		useAtom(isFirstChapterAtom)

	setIsFirstChapterInBible(currBookIndex === 0 && chapter === 1)

	const [isLastChapterInBible, setIsLastChapterInBible] =
		useAtom(isLastChapterAtom)

	setIsLastChapterInBible(
		currBookIndex === bookList.length - 1 && chapter === currBookChapterCount,
	)

	return (
		<BottomToolbarContainer>
			<div
				className={subgrid({
					column: 'content',
					pos: 'relative',
					pb: 'safe_area_bottom',
				})}
			>
				<ReturnFromReferenceFab />
				<div
					className={hstack({
						gap: '0',
						h: '14',
					})}
				>
					<ReaderNavButton
						url={prevChapterUrl}
						direction="left"
						isDisabled={isFirstChapterInBible}
					/>
					<ChapterPickerMenuRoot />

					<ReaderNavButton
						url={nextChapterUrl}
						direction="right"
						isDisabled={isLastChapterInBible}
					/>
				</div>
			</div>
		</BottomToolbarContainer>
	)
}
