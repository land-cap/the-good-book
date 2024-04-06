'use client'

import { useAtom } from 'jotai'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { hstack, subgrid } from 'styled-system/patterns'

import type { TReaderPageParams } from '~/_pages'
import type { TBook } from '~/db'
import { ReturnFromReferenceFAB } from '~/organisms/BottomToolbar/ReturnFromReferenceFAB'
import {
	isFirstChapterAtom,
	isLastChapterAtom,
	nextChapterURLAtom,
	prevChapterURLAtom,
} from '~/state'

import { BottomToolbarContainer } from './BottomToolbarContainer'
import { ChapterPickerMenu } from './ChapterPickerMenu'
import { ReaderNavButton } from './ReaderNavButton'

export const BottomToolbar = ({ bookList }: { bookList: TBook[] }) => {
	const { bookCode, chapter: _chapter } = useParams<TReaderPageParams>()

	const chapter = Number(_chapter)

	const currBook = bookList.find((book) => book.code === bookCode)

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

	const [prevChapterURL, setPrevChapterURL] = useAtom(prevChapterURLAtom)

	useEffect(
		() =>
			setPrevChapterURL(
				chapter === 1
					? `/${prevBookCode}/${prevBookChapterCount}`
					: `/${bookCode}/${chapter - 1}`,
			),
		[bookCode, chapter, prevBookChapterCount, prevBookCode, setPrevChapterURL],
	)

	const [nextChapterURL, setNextChapterURL] = useAtom(nextChapterURLAtom)

	useEffect(
		() =>
			setNextChapterURL(
				chapter === currBookChapterCount
					? `/${nextBookCode}/1`
					: `/${bookCode}/${chapter + 1}`,
			),
		[bookCode, chapter, currBookChapterCount, nextBookCode, setNextChapterURL],
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
				<ReturnFromReferenceFAB />
				<div
					className={hstack({
						gap: '0',
						h: '14',
					})}
				>
					<ReaderNavButton
						url={prevChapterURL}
						direction="left"
						isDisabled={isFirstChapterInBible}
					/>
					<ChapterPickerMenu
						currChapter={chapter}
						currBook={currBook}
						bookList={bookList}
					/>

					<ReaderNavButton
						url={nextChapterURL}
						direction="right"
						isDisabled={isLastChapterInBible}
					/>
				</div>
			</div>
		</BottomToolbarContainer>
	)
}
