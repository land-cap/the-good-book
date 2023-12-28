import { type ReactNode } from 'react'
import { subgrid } from 'styled-system/patterns'

export const ChapterPickerChapterList = ({
	children,
}: {
	children: ReactNode
}) => (
	<ul
		className={subgrid({
			display: 'grid',
			gridColumn: 'content',
			gridTemplateColumns: 'repeat(auto-fill, minmax(token(sizes.16), 1fr))',
			h: 'fit-content',
			py: '5',
		})}
	>
		{children}
	</ul>
)
