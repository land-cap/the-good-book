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

export const Paragraph = ({ children }: { children: ReactNode }) => (
	<p data-component="Paragraph" className={css({ fontFamily: 'dyslexic' })}>
		{children}
	</p>
)

export const Quote = ({ children }: { children: ReactNode }) => (
	<span
		data-component="Quote"
		className={css({
			display: 'block',
			fontFamily: 'mono',
			textAlign: 'left',
		})}
	>
		{children}
	</span>
)
