import type { ReactNode } from 'react'
import { css, cx } from 'styled-system/css'
import { subgrid } from 'styled-system/patterns'

export const BookListItem_ChapterPicker = ({
	children,
	isCurrentBook,
	onClick,
}: {
	children: ReactNode
	isCurrentBook: boolean
	onClick: () => void
}) => (
	<li
		onClick={onClick}
		className={cx(
			subgrid({
				_active: { bg: 'bg.subtle', color: 'fg.subtle' },
				_canHover: { _hover: { bg: 'bg.subtle' }, transitionDelay: 'fastest' },
				column: 'fullbleed',
				cursor: 'pointer',
				transition: 'colors',
				transitionDuration: 'fastest',
				transitionTimingFunction: 'ease-out',
			}),
			isCurrentBook && css({ fontWeight: 'bold' }),
		)}
	>
		<div className={subgrid({ column: 'content', py: '4' })}>{children}</div>
	</li>
)
