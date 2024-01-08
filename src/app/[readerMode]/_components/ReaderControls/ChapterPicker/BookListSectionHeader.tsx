import { type ReactNode } from 'react'
import { css } from 'styled-system/css'
import { caption, subgrid } from 'styled-system/patterns'

import { Separator } from '~/components'

export const BookListSectionHeader = ({
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
		<div className={css({ column: 'content' })}>
			<div
				className={caption({
					py: '4',
				})}
			>
				{children}
			</div>
			<Separator />
		</div>
	</div>
)
