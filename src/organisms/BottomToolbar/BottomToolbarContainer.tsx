'use client'

import { type ReactNode } from 'react'
import { cx } from 'styled-system/css'
import { macrogrid } from 'styled-system/patterns'

import { useIsPageScrolled } from '~/hooks'

export const BottomToolbarContainer = ({
	children,
}: {
	children: ReactNode
}) => {
	const isPageScrolled = useIsPageScrolled()

	return (
		<div
			className={cx(
				macrogrid({
					forceGpu: true,
					column: 'fullbleed',
					position: 'sticky',
					bottom: isPageScrolled ? '0' : 'calc((token(spacing.14) + 1px) * -1)',
					bg: 'bg.canvas',
					transition: 'all',
					transitionDuration: 'normal',
					transitionTimingFunction: 'ease-in-out',
				}),
			)}
		>
			{children}
		</div>
	)
}
