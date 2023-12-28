import { type ReactNode } from 'react'
import { subgrid } from 'styled-system/patterns'

export const ChapterPickerBookList = ({
	children,
}: {
	children: ReactNode
}) => (
	<ul
		className={subgrid({
			gridColumn: 'fullbleed',
			h: 'fit-content',
			py: '4',
		})}
	>
		{children}
	</ul>
)
