import type { ReactNode } from 'react'
import { subgrid } from 'styled-system/patterns'

export const ChapterPickerBookListItem = ({
	children,
	onClick,
}: {
	children: ReactNode
	onClick: () => void
}) => (
	<li
		onClick={onClick}
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
