import { type ReactNode } from 'react'
import { subgrid } from 'styled-system/patterns'

export const ChapterPickerChapterList = ({
	children,
	itemHeight,
}: {
	children: ReactNode
	itemHeight: number
}) => {
	const paddingX = (itemHeight - 16) / 2
	return (
		<ul
			className={subgrid({
				display: 'grid',
				gridColumn: 'content',
				gridTemplateColumns: 'repeat(auto-fill, minmax(token(sizes.16), 1fr))',
				h: 'fit-content',
			})}
			style={{ paddingBottom: paddingX, paddingTop: paddingX }}
		>
			{children}
		</ul>
	)
}
