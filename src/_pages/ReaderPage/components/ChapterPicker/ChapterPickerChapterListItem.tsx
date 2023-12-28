import Link from 'next/link'
import { type ReactNode } from 'react'
import { css } from 'styled-system/css'
import { center } from 'styled-system/patterns'

export const ChapterPickerChapterListItem = ({
	children,
	href,
}: {
	children: ReactNode
	href: string
}) => (
	<li
		className={css({
			_active: { color: 'fg.subtle' },
			_hover: { bg: 'bg.subtle' },
			aspectRatio: '1/1',
			placeContent: 'center',
			placeItems: 'center',
			position: 'relative',
			transition: 'colors',
			transitionDuration: 'fast',
			transitionTimingFunction: 'ease-in-out',
			w: 'full',
		})}
	>
		<Link
			href={href}
			prefetch
			className={center({ inset: 0, position: 'absolute' })}
		>
			{children}
		</Link>
	</li>
)
