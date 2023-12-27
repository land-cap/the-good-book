import { css, cx } from 'styled-system/css'
import { flex, macrogrid, subgrid } from 'styled-system/patterns'
import { Separator } from '~/components'
import { ChapterPicker } from './ChapterPicker'
import { ReaderNavButton } from './ReaderNavButton'

export const Toolbar = ({
	nextChapterHref,
	prevChapterHref,
	chapter,
	bookName,
}: {
	prevChapterHref: string
	nextChapterHref: string
	chapter: string
	bookName: string
}) => (
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
				<ChapterPicker />
				<ReaderNavButton href={nextChapterHref} direction="right" />
			</div>
		</div>
	</div>
)
