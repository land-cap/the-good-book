import { type ReactNode } from 'react'
import { css } from 'styled-system/css'
import { Macrogrid } from 'styled-system/jsx'
import { hstack } from 'styled-system/patterns'

import { Separator } from './Separator'

export const Header = ({
	leftButton = null,
	title,
	rightButton = null,
}: {
	leftButton?: ReactNode
	title: string
	rightButton?: ReactNode
}) => {
	return (
		<Macrogrid>
			<div
				className={hstack({
					gap: '4',
					justify: 'space-between',
					column: 'content',
					h: '14',
				})}
			>
				{leftButton}
				<h2 className={css({ fontWeight: 'bold' })}>{title}</h2>
				{rightButton}
			</div>
			<Separator css={{ column: 'content' }} />
		</Macrogrid>
	)
}
