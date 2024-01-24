'use client'

import { useParams } from 'next/navigation'
import { flex, subgrid } from 'styled-system/patterns'

import type { TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import type { TBook } from '~/db'

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
		(book) => book.book_name?.name === currBook.book_name?.name,
	)

	const currBookChapterCount = bookList[currBookIndex]?.chapter_count

	const prevBook = bookList[currBookIndex - 1]

	const prevBookCode = prevBook?.code

	const prevBookChapterCount = prevBook?.chapter_count

	const nextBookCode = bookList[currBookIndex + 1]?.code

	const prevChapterHref =
		chapter === 1
			? `/${prevBookCode}/${prevBookChapterCount}`
			: `/${bookCode}/${chapter - 1}`

	const nextChapterHref =
		chapter === currBookChapterCount
			? `/${nextBookCode}/1`
			: `/${bookCode}/${chapter + 1}`

	const isFirstChapterInBible = currBookIndex === 0 && chapter === 1

	const isLastChapterInBible =
		currBookIndex === bookList.length - 1 && chapter === currBookChapterCount
	return (
		<BottomToolbarContainer>
			<div
				className={subgrid({
					column: 'content',
					pb: 'safe_area_bottom',
				})}
			>
				<div
					className={flex({
						alignItems: 'center',
						h: '14',
					})}
				>
					<ReaderNavButton
						href={prevChapterHref}
						direction="left"
						isDisabled={isFirstChapterInBible}
					/>
					<ChapterPickerMenu
						currChapter={chapter}
						currBook={currBook}
						bookList={bookList}
					/>
					<ReaderNavButton
						href={nextChapterHref}
						direction="right"
						isDisabled={isLastChapterInBible}
					/>
				</div>
			</div>
		</BottomToolbarContainer>
	)
}
