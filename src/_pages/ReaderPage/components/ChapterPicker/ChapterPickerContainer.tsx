import { Dialog } from '@ark-ui/react'
import { type ReactNode } from 'react'
import { css } from 'styled-system/css'
import { macrogrid } from 'styled-system/patterns'

export const ChapterPickerContainer = ({
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
					bg: 'bg.surface',
					gridTemplateRows: 'auto minmax(auto,1fr)',
					h: 'full',
					overflow: 'hidden',
				})}
			>
				{children}
			</div>
		</Dialog.Content>
	</Dialog.Positioner>
)
