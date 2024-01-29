import { type ReactNode } from 'react'
import { css } from 'styled-system/css'

import { Icon } from '~/components'

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
		<span
			className={css({
				color: 'fg.faded',
				fontFamily: 'sans',
				fontWeight: '1000',
				cursor: 'pointer',
				verticalAlign: 'middle',
			})}
		>
			<Icon
				name="open_in_new"
				className={css({ fontSize: 'inherit', w: 'unset' })}
			/>
		</span>
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
