import { type ReactNode } from 'react'
import { subgrid } from 'styled-system/patterns'

export const BookList_ChapterPicker = ({
	children,
}: {
	children: ReactNode
}) => (
	<ul
		className={subgrid({
			gridColumn: 'fullbleed',
			h: 'fit-content',
			pb: '4',
		})}
	>
		{children}
	</ul>
)
