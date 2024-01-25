'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { flex, subgrid } from 'styled-system/patterns'

import type { TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import type { TBook } from '~/db'

import { BottomToolbarContainer } from './BottomToolbarContainer'
import { ChapterPickerMenu } from './ChapterPickerMenu'
import { ReaderNavButton } from './ReaderNavButton'

const useNavigateChapterWithArrowKeys = (
	prevChapterUrl: string,
	nextChapterUrl: string,
	isFirstChapterInBible: boolean,
	isLastChapterInBible: boolean,
) => {
	const router = useRouter()

	useEffect(() => {
		const keyCodeToUrl = {
			ArrowLeft: prevChapterUrl,
			ArrowRight: nextChapterUrl,
		}
		const handleArrowKeyPress = ({ key }: KeyboardEvent) => {
			//@ts-ignore
			const url = keyCodeToUrl?.[key] as unknown as string | undefined
			url && key === 'ArrowLeft' && !isFirstChapterInBible && router.push(url)
			url && key === 'ArrowRight' && !isLastChapterInBible && router.push(url)
		}

		window.addEventListener('keyup', handleArrowKeyPress)

		return () => {
			window.removeEventListener('keyup', handleArrowKeyPress)
		}
	}, [isFirstChapterInBible, nextChapterUrl, prevChapterUrl, router])
}

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

	useNavigateChapterWithArrowKeys(
		prevChapterHref,
		nextChapterHref,
		isFirstChapterInBible,
		isLastChapterInBible,
	)

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
