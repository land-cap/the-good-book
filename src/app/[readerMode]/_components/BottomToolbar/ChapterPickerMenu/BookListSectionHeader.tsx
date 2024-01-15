import { type ReactNode } from 'react'
import { css } from 'styled-system/css'
import { caption, macrogrid } from 'styled-system/patterns'

import { Separator } from '~/components'

export const BookListSectionHeader = ({
	children,
}: {
	children: ReactNode
}) => (
	<div
		className={macrogrid({
			bg: 'bg.canvas',
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
