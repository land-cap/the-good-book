import { type ReactNode } from 'react'
import { subgrid } from 'styled-system/patterns'

export const ChapterPickerList = ({ children }: { children: ReactNode }) => (
	<ul
		className={subgrid({
			gridColumn: 'fullbleed',
			h: 'full',
			overflowY: 'auto',
		})}
	>
		{children}
	</ul>
)
