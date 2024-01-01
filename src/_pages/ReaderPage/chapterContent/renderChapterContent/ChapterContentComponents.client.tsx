import { type ReactNode } from 'react'
import { css, cx } from 'styled-system/css'

export const Verse = ({
	children,
	isStudyMode,
}: {
	children: ReactNode
	isStudyMode: boolean
	verseOrder: number
	initialIsFocused?: boolean
}) => (
	<span
		data-component="Verse"
		className={cx(
			isStudyMode &&
				css({
					cursor: 'text',
					display: 'block',
					position: 'relative',
					userSelect: 'text',
				}),
		)}
	>
		{children}
	</span>
)
