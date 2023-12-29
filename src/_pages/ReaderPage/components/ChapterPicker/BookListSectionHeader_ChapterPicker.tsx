import { type ReactNode } from 'react'
import { css, cx } from 'styled-system/css'
import { subgrid } from 'styled-system/patterns'

import { Separator } from '~/components'
import { labelCss } from '~/styles/label.css'

export const BookListSectionHeader_ChapterPicker = ({
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
				className={cx(
					labelCss,
					css({
						py: '4',
					}),
				)}
			>
				{children}
			</div>
			<Separator />
		</div>
	</div>
)
