import { Dialog } from '@ark-ui/react'
import { type ReactNode } from 'react'
import { css } from 'styled-system/css'
import { macrogrid } from 'styled-system/patterns'

export const Container_ChapterPicker = ({
	children,
}: {
	children: ReactNode
}) => (
	<Dialog.Positioner className={css({ inset: '0', position: 'fixed' })}>
		<Dialog.Content
			className={css({
				h: 'full',
				zIndex: '20',
			})}
		>
			<div
				className={macrogrid({
					bg: 'bg.canvas',
					h: 'full',
				})}
			>
				{children}
			</div>
		</Dialog.Content>
	</Dialog.Positioner>
)