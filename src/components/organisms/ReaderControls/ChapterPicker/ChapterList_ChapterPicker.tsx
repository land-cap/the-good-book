import { type ReactNode } from 'react'
import { subgrid } from 'styled-system/patterns'

export const ChapterList_ChapterPicker = ({
	children,
	chapterListItemHeight,
}: {
	children: ReactNode
	chapterListItemHeight: number
}) => {
	const paddingBottom = `calc(${
		(chapterListItemHeight - 16) / 2
	}px + env(safe-area-inset-bottom,0))`

	return (
		<ul
			className={subgrid({
				display: 'grid',
				gridColumn: 'content',
				gridTemplateColumns: 'repeat(5, 1fr)',
				h: 'fit-content',
				md: {
					gridTemplateColumns: 'repeat(10, 1fr)',
				},
			})}
			style={{ paddingBottom: paddingBottom }}
		>
			{children}
		</ul>
	)
}
