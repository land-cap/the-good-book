import type { ReactNode } from 'react'
import { subgrid } from 'styled-system/patterns'

export const BookListItem_ChapterPicker = ({
	children,
	onClick,
}: {
	children: ReactNode
	onClick: () => void
}) => (
	<li
		onClick={onClick}
		className={subgrid({
			_active: { bg: 'bg.subtle', color: 'fg.subtle' },
			_canHover: { _hover: { bg: 'bg.subtle' }, transitionDelay: 'fastest' },
			column: 'fullbleed',
			cursor: 'pointer',
			transition: 'colors',
			transitionDuration: 'fastest',
			transitionTimingFunction: 'ease-out',
		})}
	>
		<div className={subgrid({ column: 'content', py: '4' })}>{children}</div>
	</li>
)
