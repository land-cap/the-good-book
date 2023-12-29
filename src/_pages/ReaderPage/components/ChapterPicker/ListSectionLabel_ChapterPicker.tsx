import { type ReactNode } from 'react'
import { css } from 'styled-system/css'
import { subgrid } from 'styled-system/patterns'

import { Separator } from '~/components'

export const ListSectionLabel_ChapterPicker = ({
	children,
}: {
	children: ReactNode
}) => (
	<div
		className={subgrid({
			bg: 'bg.canvas',
			column: 'fullbleed',
			position: 'sticky',
			top: '0',
		})}
	>
		<div className={css({ gridColumn: 'content' })}>
			<div
				className={css({
					color: 'fg.subtle',
					fontSize: 'xs',
					letterSpacing: '0.05em',
					lineHeight: 'token(spacing.6)',
					py: '4',
					textTransform: 'uppercase',
				})}
			>
				{children}
			</div>
			<Separator />
		</div>
	</div>
)
