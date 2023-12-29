import type { ReactNode } from 'react'
import { css, cx } from 'styled-system/css'
import { subgrid } from 'styled-system/patterns'

export const BookListItem_ChapterPicker = ({
	children,
	isCurrBook,
	onClick,
}: {
	children: ReactNode
	isCurrBook: boolean
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
			isCurrBook && css({ fontWeight: 'bold' }),
		)}
	>
		<div className={subgrid({ column: 'content', py: '4' })}>{children}</div>
	</li>
)
