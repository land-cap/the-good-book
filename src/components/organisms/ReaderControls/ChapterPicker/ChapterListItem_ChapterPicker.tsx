import Link from 'next/link'
import {
	type ForwardedRef,
	forwardRef,
	type MouseEventHandler,
	type ReactNode,
} from 'react'
import { css, cx } from 'styled-system/css'
import { center } from 'styled-system/patterns'

const ChapterListItem_ChapterPicker = forwardRef(
	(
		{
			children,
			href,
			isCurrChapter,
			onClick,
		}: {
			children: ReactNode
			href: string
			isCurrChapter: boolean
			onClick: MouseEventHandler<HTMLAnchorElement>
		},
		ref: ForwardedRef<HTMLLIElement>,
	) => (
		<li
			ref={ref}
			className={cx(
				css({
					_active: { bg: 'bg.subtle', color: 'fg.subtle' },
					_canHover: {
						_hover: { bg: 'bg.subtle' },
						transitionDelay: 'fastest',
					},
					aspectRatio: '1/1',
					placeContent: 'center',
					placeItems: 'center',
					position: 'relative',
					transition: 'colors',
					transitionDuration: 'fastest',
					transitionTimingFunction: 'ease-out',
					w: 'full',
				}),
				isCurrChapter && css({ fontWeight: 'bold' }),
			)}
		>
			<Link
				href={href}
				onClick={onClick}
				className={center({ inset: 0, position: 'absolute' })}
			>
				{children}
			</Link>
		</li>
	),
)

ChapterListItem_ChapterPicker.displayName = 'ChapterListItem_ChapterPicker'

export { ChapterListItem_ChapterPicker }
