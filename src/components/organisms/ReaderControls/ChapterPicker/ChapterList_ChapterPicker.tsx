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
				gridTemplateColumns: 'repeat(auto-fill, minmax(token(sizes.16), 1fr))',
				h: 'fit-content',
			})}
			style={{ paddingBottom: paddingBottom }}
		>
			{children}
		</ul>
	)
}
