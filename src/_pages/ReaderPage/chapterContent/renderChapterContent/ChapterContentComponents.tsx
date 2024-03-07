import { type ReactNode } from 'react'
import { css } from 'styled-system/css'

export const FancyAside = ({ children }: { children: ReactNode }) => (
	<p
		data-component="FancyAside"
		className={css({
			color: 'fg.subtle',
			fontFamily: 'mono',
		})}
	>
		{children}
	</p>
)
