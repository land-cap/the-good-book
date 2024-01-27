'use client'

import { useLogger, useWindowEvent } from '@mantine/hooks'
import { useAtomValue } from 'jotai'
import { type ReactNode } from 'react'
import { css } from 'styled-system/css'
import { flex, macrogrid } from 'styled-system/patterns'

import { Separator } from '~/components'
import { useIsPageScrolled } from '~/hooks'
import { forceShowTopToolbarAtom, isPageBottomReachedAtom } from '~/state'

export const TopToolbarContainer = ({ children }: { children: ReactNode }) => {
	const forceShowTopToolbar = useAtomValue(forceShowTopToolbarAtom)

	const isPageScrolled = useIsPageScrolled()

	useWindowEvent('scroll', () => console.log('scroll'))

	const isPageBottomReached = useAtomValue(isPageBottomReachedAtom)

	const opacity =
		(forceShowTopToolbar && '1') ||
		(isPageBottomReached && '1') ||
		isPageScrolled
			? '1'
			: '0'

	useLogger('forceShowTopToolbar', [forceShowTopToolbar])

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
