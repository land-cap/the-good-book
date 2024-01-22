'use client'

import { useThrottle } from '@uidotdev/usehooks'
import { type ReactNode, useCallback, useEffect, useState } from 'react'
import { css } from 'styled-system/css'
import { flex, macrogrid } from 'styled-system/patterns'

import { Separator } from '~/components'

export const TopToolbarContainer = ({ children }: { children: ReactNode }) => {
	const [scroll, setScroll] = useState<'up' | 'down' | null>(null)

	const throttledScroll = useThrottle(scroll, 250)

	const [lastScroll, setLastScroll] = useState(0)

	const handleScroll = useCallback(() => {
		const currentScroll = window.scrollY
		if (currentScroll <= 0) {
			setScroll('up')
			return
		}

		if (currentScroll > lastScroll && scroll !== 'down') {
			setScroll('down')
		} else if (currentScroll < lastScroll && scroll === 'down') {
			setScroll('up')
		}
		setLastScroll(currentScroll)
	}, [lastScroll, scroll])

	useEffect(
		() => window.addEventListener('scroll', handleScroll),
		[handleScroll],
	)

	return (
		<header
			className={macrogrid({
				column: 'fullbleed',
				zIndex: '1',
				position: 'sticky',
				top:
					throttledScroll === 'up'
						? '0'
						: 'calc((token(spacing.14) + 1px) * -1)',
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
