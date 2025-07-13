import type { Meta } from '@storybook/react'
import { flex } from 'styled-system/patterns'

import { Icon, iconRecipe } from './Icon'

const meta: Meta<typeof Icon> = {
	component: Icon,
	parameters: {
		layout: 'centered',
	},
	title: 'Icon',
}

export default meta

const iconSizeRange = (
	<div className={flex({ align: 'center', gap: '8', justify: 'center' })}>
		{iconRecipe.variantMap.size.map((size) => (
			<Icon key={size} name="square" size={size} />
		))}
	</div>
)

export const IconSizes = {
	render: () => iconSizeRange,
}
