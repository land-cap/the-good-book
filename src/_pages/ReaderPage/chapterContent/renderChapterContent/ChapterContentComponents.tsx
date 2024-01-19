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
	<p data-component="Paragraph">{children}</p>
)

export const CrossReference = ({
	referenceList,
}: {
	referenceList: string
}) => (
	<span data-component="CrossReference" className={css({ cursor: 'pointer' })}>
		&nbsp;
		<sup
			className={css({
				color: 'fg.faded',
				fontFamily: 'sans',
				fontSize: '0.75em',
				fontWeight: '1000',
			})}
		>
			&dagger;
		</sup>
		<div className={css({ display: 'none' })}>{referenceList}</div>
	</span>
)

export const Quote = ({ children }: { children: ReactNode }) => (
	<span
		data-component="Quote"
		className={css({
			display: 'block',
			fontFamily: 'mono',
		})}
	>
		{children}
	</span>
)
