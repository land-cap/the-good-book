import { css, cx } from 'styled-system/css'
import { flex, macrogrid, subgrid } from 'styled-system/patterns'
import { Separator } from '~/components'
import { getBookList } from '~/db'
import { type READER_MODE } from '../ReaderPage.types'
import { ChapterPicker } from './ChapterPicker'
import { ReaderNavButton } from './ReaderNavButton'

export const Toolbar = async ({
	bookName,
	bookCode,
	chapter,
	readerMode,
}: {
	bookName: string
	bookCode: string
	chapter: number
	readerMode: READER_MODE
}) => {
	const bookList = await getBookList()

	const currBookIndex = bookList.findIndex((book) => book.name === bookName)

	const currBookChapterCount = bookList[currBookIndex]?.book.chapter_count

	const prevBook = bookList[currBookIndex - 1]

	const prevBookCode = prevBook?.book.code

	const prevBookChapterCount = prevBook?.book.chapter_count

	const nextBookCode = bookList[currBookIndex + 1]?.book.code

	const prevChapterHref =
		chapter === 1
			? `/${readerMode}/${prevBookCode}/${prevBookChapterCount}`
			: `/${readerMode}/${bookCode}/${chapter - 1}`

	const nextChapterHref =
		chapter === currBookChapterCount
			? `/${readerMode}/${nextBookCode}/1`
			: `/${readerMode}/${bookCode}/${chapter + 1}`

	return (
		<div
			className={cx(
				macrogrid({
					bg: 'bg.canvas',
					bottom: 0,
					gridColumn: 'fullbleed',
					position: 'fixed',
					w: 'full',
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
					<ReaderNavButton href={prevChapterHref} direction="left" />
					<ChapterPicker
						chapter={chapter}
						bookName={bookName}
						bookList={bookList}
					/>
					<ReaderNavButton href={nextChapterHref} direction="right" />
				</div>
			</div>
		</div>
	)
}
