import { type ButtonHTMLAttributes, type DetailedHTMLProps } from 'react'
import { css, cx } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { flex, square } from 'styled-system/patterns'
import { button } from 'styled-system/recipes'

import { Icon } from '~/components'

const Container = styled('div', {
	base: flex.raw({
		direction: 'column',
		gap: 2,
	}),
})

const Label = styled('label', {
	base: { color: 'fg.subtle', fontSize: 'sm', lineHeight: 1 },
})

const Button = ({
	children,
	...props
}: DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>) => (
	<button
		className={cx(
			button({ size: 'md', border: true }),
			css({
				w: 'full',
				gap: '4',
				justifyContent: 'space-between',
				alignItems: 'center',
				fontWeight: 'regular',
				pr: '0',
			}),
		)}
		{...props}
	>
		{children}
		<styled.center className={square({ size: '10' })}>
			<Icon code="&#xe409;" size={6} />
		</styled.center>
	</button>
)

export const SelectField = {
	Container,
	Label,
	Button,
}
