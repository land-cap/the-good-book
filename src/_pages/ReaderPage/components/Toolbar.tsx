import { css, cx } from 'styled-system/css'
import { flex, macrogrid, subgrid } from 'styled-system/patterns'
import { Separator } from '~/components'
import { getBookNameList } from '~/db'
import { ChapterPicker } from './ChapterPicker'
import { ReaderNavButton } from './ReaderNavButton'

export const Toolbar = async ({
	nextChapterHref,
	prevChapterHref,
	chapter,
	bookName,
}: {
	prevChapterHref: string
	nextChapterHref: string
	chapter: string
	bookName: string
}) => {
	const bookList = await getBookNameList()

	return (
		<div
			className={cx(
				macrogrid({
					bg: 'bg.surface',
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
						bookNameList={bookList}
					/>
					<ReaderNavButton href={nextChapterHref} direction="right" />
				</div>
			</div>
		</div>
	)
}
