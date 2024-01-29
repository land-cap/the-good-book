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
	<span data-component="CrossReference" className={css({ pos: 'relative' })}>
		&nbsp;
		<sup
			className={css({
				color: 'fg.faded',
				fontFamily: 'sans',
				fontSize: '0.75em',
				fontWeight: '1000',
				cursor: 'pointer',
			})}
		>
			&dagger;
		</sup>
		<span
			className={css({
				display: 'none',
				pos: 'absolute',
				left: '0',
				top: '0',
			})}
		>
			{referenceList}
		</span>
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
