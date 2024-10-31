import { type MouseEventHandler, type ReactNode } from 'react'
import { css, cx } from 'styled-system/css'
import { Caption, Flex, styled } from 'styled-system/jsx'
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
	label,
	placeholder,
	onClick,
}: {
	label: ReactNode
	placeholder?: string
	onClick?: MouseEventHandler<HTMLButtonElement>
}) => (
	<button
		className={cx(
			'group',
			button({ border: true, size: 'lg' }),
			css({
				pos: 'relative',
				w: 'full',
				gap: '4',
				justifyContent: 'space-between',
				alignItems: 'center',
				fontWeight: 'regular',
				pr: '0',
				_active: { bg: 'none', borderColor: 'fg.faded' },
				_canHover: { _hover: { bg: 'none' } },
			}),
		)}
		onClick={onClick}
	>
		<Flex direction="column" gap="1" py="0.5">
			{placeholder && (
				<Caption
					pos="absolute"
					top="0"
					left="2"
					transform="translateY(-50%)"
					px="2"
					bg="bg.canvas"
					color="fg.subtle"
					_groupActive={{ color: 'inherit' }}
					_canHover={{ _groupHover: { color: 'inherit' } }}
				>
					{placeholder}
				</Caption>
			)}
			{label}
		</Flex>
		<styled.center className={square({ size: '10' })}>
			<Icon name="arrow_drop_down" size={6} />
		</styled.center>
	</button>
)

export const SelectField = {
	Container,
	Label,
	Button,
}
