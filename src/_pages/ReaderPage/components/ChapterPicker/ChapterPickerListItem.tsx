import type { ReactNode } from 'react'
import { subgrid } from 'styled-system/patterns'

export const ChapterPickerListItem = ({
	children,
}: {
	children: ReactNode
}) => (
	<li
		className={subgrid({
			_hover: { bg: 'bg.subtle' },
			column: 'fullbleed',
			cursor: 'pointer',
			transition: 'colors',
			transitionDelay: 'fastest',
			transitionDuration: 'fastest',
			transitionTimingFunction: 'ease-out',
		})}
	>
		<div className={subgrid({ column: 'content', py: '4' })}>{children}</div>
	</li>
)
