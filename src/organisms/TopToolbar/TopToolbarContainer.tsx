'use client'

import { useLogger } from '@mantine/hooks'
import { useAtomValue } from 'jotai'
import { type ReactNode } from 'react'
import { css } from 'styled-system/css'
import { flex, macrogrid } from 'styled-system/patterns'

import { Separator } from '~/components'
import { useIsPageScrolled } from '~/hooks'
import { isPageBottomReachedAtom, isScrollLockedAtom } from '~/state'

export const TopToolbarContainer = ({ children }: { children: ReactNode }) => {
	const isPageScrolled = useIsPageScrolled()
	const isPageBottomReached = useAtomValue(isPageBottomReachedAtom)
	const isScrollLocked = useAtomValue(isScrollLockedAtom)
	const opacity =
		(isScrollLocked && '1') || (isPageBottomReached && '1') || isPageScrolled
			? '1'
			: '0'

	useLogger('TopToolbarContainer', [isScrollLocked])

	return (
		<>
			<header
				className={macrogrid({
					column: 'fullbleed',
					forceGpu: true,
					zIndex: '1',
					position: 'sticky',
					top: '0',
					opacity: opacity,
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
