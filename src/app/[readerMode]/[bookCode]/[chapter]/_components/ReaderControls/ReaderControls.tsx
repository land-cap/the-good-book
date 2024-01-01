'use client'

import { useParams } from 'next/navigation'
import { css, cx } from 'styled-system/css'
import { flex, macrogrid, subgrid } from 'styled-system/patterns'

import { type TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import { Separator } from '~/components'
import { type TBook } from '~/db'

import { ChapterPicker } from './ChapterPicker'
import { ReaderNavButton } from './ReaderNavButton'
import { useResetReaderScrollOnParamChange } from './useResetReaderScrollOnParamChange'

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

	useResetReaderScrollOnParamChange(currBook.code, chapter)

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
					column: 'fullbleed',
				}),
			)}
		>
			<Separator className={css({ column: 'content' })} />
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
					<ChapterPicker
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
		</div>
	)
}
