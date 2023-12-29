import Link from 'next/link'
import { type ForwardedRef, forwardRef, type ReactNode } from 'react'
import { css } from 'styled-system/css'
import { center } from 'styled-system/patterns'

//eslint-disable-next-line react/display-name
export const ChapterPickerChapterListItem = forwardRef(
	(
		{
			children,
			href,
		}: {
			children: ReactNode
			href: string
		},
		ref: ForwardedRef<HTMLLIElement>,
	) => (
		<li
			ref={ref}
			className={css({
				_active: { bg: 'bg.subtle', color: 'fg.subtle' },
				_canHover: { _hover: { bg: 'bg.subtle' }, transitionDelay: 'fastest' },
				aspectRatio: '1/1',
				placeContent: 'center',
				placeItems: 'center',
				position: 'relative',
				transition: 'colors',
				transitionDuration: 'fastest',
				transitionTimingFunction: 'ease-out',
				w: 'full',
			})}
		>
			<Link href={href} className={center({ inset: 0, position: 'absolute' })}>
				{children}
			</Link>
		</li>
	),
)
