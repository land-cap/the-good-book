import { type ReactNode } from 'react'
import { css } from 'styled-system/css'
import { hstack, macrogrid } from 'styled-system/patterns'

import { Separator } from '~/components'

export const Header = ({ children }: { children: ReactNode }) => (
	<div className={macrogrid()}>
		<div className={css({ column: 'content' })}>
			<div className={hstack({ h: '14', justify: 'space-between' })}>
				{children}
			</div>
		</div>
		<Separator css={{ column: 'content' }} />
	</div>
)
