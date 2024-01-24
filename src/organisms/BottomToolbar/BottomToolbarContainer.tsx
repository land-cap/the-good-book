import { type ReactNode } from 'react'
import { macrogrid } from 'styled-system/patterns'

import { useShowCompressedBottomToolbar } from '~/organisms/BottomToolbar/useShowCompressedBottomToolbar'

export const BottomToolbarContainer = ({
	children,
}: {
	children: ReactNode
}) => {
	const showCompressedToolbar = useShowCompressedBottomToolbar()

	return (
		<div
			className={macrogrid({
				column: 'fullbleed',
				forceGpu: true,
				position: 'sticky',
				bottom: '0',
				h: showCompressedToolbar ? '14' : '8',
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
}
