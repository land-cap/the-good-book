'use client'

import { type ReactNode } from 'react'
import { css } from 'styled-system/css'
import { flex, macrogrid } from 'styled-system/patterns'

import { Separator } from '~/components'
import { useIsPageScrolled } from '~/hooks'

export const TopToolbarContainer = ({ children }: { children: ReactNode }) => {
	const isPageScrolled = useIsPageScrolled()

	return (
		<header
			className={macrogrid({
				column: 'fullbleed',
				forceGpu: true,
				zIndex: '1',
				position: 'sticky',
				top: isPageScrolled ? '0' : 'calc((token(spacing.14) + 1px) * -1)',
				opacity: isPageScrolled ? '1' : '0',
				bg: 'bg.canvas',
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
	)
}
