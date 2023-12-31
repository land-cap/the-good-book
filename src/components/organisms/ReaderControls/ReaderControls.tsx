'use client'

import { useParams } from 'next/navigation'
import { css, cx } from 'styled-system/css'
import { flex, macrogrid, subgrid } from 'styled-system/patterns'

import { type TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import { type TBook } from '~/db'

import { Separator } from '../../atoms'
import { ChapterPicker } from './ChapterPicker'
import { ReaderNavButton_ReaderControls } from './ReaderNavButton_ReaderControls'

export const ReaderControls = ({ bookList }: { bookList: TBook[] }) => {
	const {
		bookCode,
		chapter: _chapter,
		readerMode,
	} = useParams<TReaderPageParams>()

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
			? `/${readerMode}/${prevBookCode}/${prevBookChapterCount}`
			: `/${readerMode}/${bookCode}/${chapter - 1}`

	const nextChapterHref =
		chapter === currBookChapterCount
			? `/${readerMode}/${nextBookCode}/1`
			: `/${readerMode}/${bookCode}/${chapter + 1}`

	const isFirstChapterInBible = currBookIndex === 0 && chapter === 1

	const isLastChapterInBible =
		currBookIndex === bookList.length - 1 && chapter === currBookChapterCount

	return (
		<div
			className={cx(
				macrogrid({
					bg: 'bg.canvas',
					gridColumn: 'fullbleed',
				}),
			)}
		>
			<Separator className={css({ gridColumn: 'content' })} />
			<div
				className={subgrid({
					column: 'content',
					pb: 'safe_area_bottom',
					userSelect: 'none',
				})}
			>
				<div
					className={flex({
						alignItems: 'center',
						h: '14',
					})}
				>
					<ReaderNavButton_ReaderControls
						href={prevChapterHref}
						direction="left"
						isDisabled={isFirstChapterInBible}
					/>
					<ChapterPicker
						currChapter={chapter}
						currBook={currBook}
						bookList={bookList}
					/>
					<ReaderNavButton_ReaderControls
						href={nextChapterHref}
						direction="right"
						isDisabled={isLastChapterInBible}
					/>
				</div>
			</div>
		</div>
	)
}
