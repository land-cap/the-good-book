'use client'

import { useAtomValue } from 'jotai'
import { type ReactNode } from 'react'
import { cx } from 'styled-system/css'
import { macrogrid } from 'styled-system/patterns'

import { isFooterVisibleAtom } from '~/app/[bookCode]/_components/footer.state'
import { useIsPageScrolled } from '~/hooks'

export const BottomToolbarContainer = ({
	children,
}: {
	children: ReactNode
}) => {
	const isPageScrolled = useIsPageScrolled()

	const isFooterVisible = useAtomValue(isFooterVisibleAtom)

	return (
		<div
			className={cx(
				macrogrid({
					column: 'fullbleed',
					forceGpu: true,
					position: 'sticky',
					bottom: '0',
					opacity: (isFooterVisible && '1') || isPageScrolled ? '1' : '0',
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
