'use client'

import { useAtom, useAtomValue } from 'jotai'
import { useState } from 'react'
import { hstack, subgrid } from 'styled-system/patterns'
import { useIsFirstRender } from 'usehooks-ts'

import type { TBook } from '~/db'
import { buildReaderUrl } from '~/hooks'
import {
	currBookAtom,
	currBookCodeAtom,
	currChapterAtom,
	isFirstChapterAtom,
	isLastChapterAtom,
} from '~/state'

import { BottomToolbarContainer } from './BottomToolbarContainer'
import { ChapterPickerMenuRoot } from './ChapterPickerMenu'
import { ReaderNavButton } from './ReaderNavButton'
import { ReturnFromReferenceFab } from './ReturnFromReferenceFab'

export const BottomToolbar = ({ bookList }: { bookList: TBook[] }) => {
	const bookCode = useAtomValue(currBookCodeAtom)

	const chapter = useAtomValue(currChapterAtom)

	const currBook = useAtomValue(currBookAtom)

	const currBookIndex = bookList.findIndex(
		(book) => book.book_name?.value === currBook.book_name?.value,
	)

	const currBookChapterCount = bookList[currBookIndex]?.chapter_count

	const prevBook = bookList[currBookIndex - 1]

	const prevBookCode = prevBook?.code

	const prevBookChapterCount = prevBook?.chapter_count

	const nextBookCode = bookList[currBookIndex + 1]?.code

	const [prevChapterUrl, setPrevChapterUrl] = useState('')

	const isFirstRender = useIsFirstRender()

	if (isFirstRender) {
		setPrevChapterUrl(
			chapter === 1
				? buildReaderUrl({
						bookCode: prevBookCode,
						chapter: prevBookChapterCount,
				  })
				: buildReaderUrl({ bookCode, chapter: chapter - 1 }),
		)
	}

	const [nextChapterUrl, setNextChapterUrl] = useState('')

	if (isFirstRender) {
		setNextChapterUrl(
			chapter === currBookChapterCount
				? buildReaderUrl({ bookCode: nextBookCode, chapter: 1 })
				: buildReaderUrl({ bookCode, chapter: chapter + 1 }),
		)
	}

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
				{prevChapterUrl} | {nextChapterUrl}
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
