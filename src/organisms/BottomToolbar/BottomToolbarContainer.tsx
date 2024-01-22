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
					column: 'fullbleed',
					forceGpu: true,
					position: 'sticky',
					bottom: '0',
					opacity: isPageScrolled ? '1' : '0',
					bg: 'bg.canvas',
					willChange: 'bottom, opacity',
					transition: 'all',
					transitionDuration: 'normal',
					transitionTimingFunction: 'ease-in-out',
					sm: {
						bottom: '0',
						opacity: '1',
					},
				}),
			)}
		>
			{children}
		</div>
	)
}
