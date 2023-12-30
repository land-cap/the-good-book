import { type ReactNode } from 'react'
import { css } from 'styled-system/css'
import { macrogrid } from 'styled-system/patterns'

export const Container_ChapterPicker = ({
	children,
}: {
	children: ReactNode
}) => (
	<div className={css({ inset: '0', position: 'fixed', zIndex: '1' })}>
		<div
			className={macrogrid({
				bg: 'bg.canvas',
				h: 'full',
			})}
		>
			{children}
		</div>
	</div>
)
