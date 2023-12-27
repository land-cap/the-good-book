import { cx } from 'styled-system/css'
import { center, flex, macrogrid, subgrid } from 'styled-system/patterns'
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
					justifyContent: 'space-between',
				})}
			>
				<ReaderNavButton href={prevChapterHref} direction="left" />
				<button
					//className="flex h-full grow place-items-center justify-center px-4 font-bold transition duration-quick ease-in-out hover:bg-bgSubtle active:text-fgSubtle"
					className={center({
						_active: { color: 'fg.subtle' },
						_hover: { bg: 'bg.subtle' },
						fontWeight: 'bold',
						h: 'full',
						px: '4',
						transition: 'colors',
						transitionDuration: 'fast',
						transitionTimingFunction: 'ease-in-out',
					})}
				>
					{bookName} {chapter}
				</button>
				<ReaderNavButton href={nextChapterHref} direction="right" />
			</div>
		</div>
	</div>
)
