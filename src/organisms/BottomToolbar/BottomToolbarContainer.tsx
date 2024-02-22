import { type ReactNode } from 'react'
import { css } from 'styled-system/css'
import { macrogrid } from 'styled-system/patterns'

import { Separator } from '~/components'

export const BottomToolbarContainer = ({
	children,
}: {
	children: ReactNode
}) => (
	<nav
		className={macrogrid({
			column: 'fullbleed',
			forceGpu: true,
			pos: 'sticky',
			bottom: '0',
			bg: 'bg.canvas',
			willChange: 'bottom, opacity',
			transition: 'all',
			transitionDuration: 'normal',
			transitionTimingFunction: 'ease-in-out',
		})}
	>
		<Separator className={css({ column: 'content' })} />
		{children}
	</nav>
)
