import { type ReactNode } from 'react'
import { macrogrid } from 'styled-system/patterns'

export const BottomToolbarContainer = ({
	children,
}: {
	children: ReactNode
}) => (
	<div
		className={macrogrid({
			column: 'fullbleed',
			forceGpu: true,
			position: 'sticky',
			bottom: '0',
			bg: 'bg.canvas',
			willChange: 'bottom, opacity',
			transition: 'all',
			transitionDuration: 'normal',
			transitionTimingFunction: 'ease-in-out',
			sm: {
				bottom: '0',
				opacity: '1',
			},
		})}
	>
		{children}
	</div>
)
