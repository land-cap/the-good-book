import { type ReactNode } from 'react'
import { css } from 'styled-system/css'
import { flex, macrogrid } from 'styled-system/patterns'

import { Separator } from '~/components'

export const TopToolbarContainer = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<header
				className={macrogrid({
					column: 'fullbleed',
					forceGpu: true,
					bg: 'bg.canvas',
					willChange: 'top, opacity',
					transition: 'all',
					transitionDuration: 'normal',
					transitionTimingFunction: 'ease-in-out',
				})}
			>
				<nav
					className={flex({
						align: 'center',
						column: 'content',
						direction: 'row',
						gap: '6',
						h: '14',
						justify: 'space-between',
					})}
				>
					{children}
				</nav>
				<Separator className={css({ column: 'content' })} />
			</header>
		</>
	)
}
