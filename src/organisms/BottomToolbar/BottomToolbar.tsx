'use client'

import { useAtom, useAtomValue } from 'jotai'
import { useEffect } from 'react'
import { hstack, subgrid } from 'styled-system/patterns'

import type { TBook } from '~/db'
import { useBuildReaderUrl } from '~/hooks'
import {
	currBookAtom,
	currBookCodeAtom,
	currChapterAtom,
	isFirstChapterAtom,
	isLastChapterAtom,
	nextChapterUrlAtom,
	prevChapterUrlAtom,
} from '~/state'

import { BottomToolbarContainer } from './BottomToolbarContainer'
import { ChapterPickerMenu } from './ChapterPickerMenu'
import { ReaderNavButton } from './ReaderNavButton'
import { ReturnFromReferenceFab } from './ReturnFromReferenceFab'

export const BottomToolbar = ({ bookList }: { bookList: TBook[] }) => {
	const bookCode = useAtomValue(currBookCodeAtom)

	const chapter = useAtomValue(currChapterAtom)

	const currBook = useAtomValue(currBookAtom)

	if (!currBook) {
		throw new Error('No book data')
	}

	const currBookIndex = bookList.findIndex(
		(book) => book.book_name?.value === currBook.book_name?.value,
	)

	const currBookChapterCount = bookList[currBookIndex]?.chapter_count

	const prevBook = bookList[currBookIndex - 1]

	const prevBookCode = prevBook?.code

	const prevBookChapterCount = prevBook?.chapter_count

	const nextBookCode = bookList[currBookIndex + 1]?.code

	const [prevChapterUrl, setPrevChapterUrl] = useAtom(prevChapterUrlAtom)

	const buildReaderUrl = useBuildReaderUrl()

	useEffect(
		() =>
			setPrevChapterUrl(
				chapter === 1
					? buildReaderUrl({
							bookCode: prevBookCode,
							chapter: prevBookChapterCount,
					  })
					: buildReaderUrl({ bookCode, chapter: chapter - 1 }),
			),
		[
			bookCode,
			buildReaderUrl,
			chapter,
			prevBookChapterCount,
			prevBookCode,
			setPrevChapterUrl,
		],
	)

	const [nextChapterUrl, setNextChapterUrl] = useAtom(nextChapterUrlAtom)

	useEffect(
		() =>
			setNextChapterUrl(
				chapter === currBookChapterCount
					? buildReaderUrl({ bookCode: nextBookCode, chapter: 1 })
					: buildReaderUrl({ bookCode, chapter: chapter + 1 }),
			),
		[
			bookCode,
			buildReaderUrl,
			chapter,
			currBookChapterCount,
			nextBookCode,
			setNextChapterUrl,
		],
	)

	const [isFirstChapterInBible, setIsFirstChapterInBible] =
		useAtom(isFirstChapterAtom)

	useEffect(
		() => setIsFirstChapterInBible(currBookIndex === 0 && chapter === 1),
		[chapter, currBookIndex, setIsFirstChapterInBible],
	)

	const [isLastChapterInBible, setIsLastChapterInBible] =
		useAtom(isLastChapterAtom)

	useEffect(
		() =>
			setIsLastChapterInBible(
				currBookIndex === bookList.length - 1 &&
					chapter === currBookChapterCount,
			),
		[
			bookList.length,
			chapter,
			currBookChapterCount,
			currBookIndex,
			setIsLastChapterInBible,
		],
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
					<ChapterPickerMenu />

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
