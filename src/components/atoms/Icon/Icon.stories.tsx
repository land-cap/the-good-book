import type { Meta } from '@storybook/react'
import { Icon, iconSizeList } from './Icon'

const meta: Meta<typeof Icon> = {
	component: Icon,
	parameters: {
		layout: 'centered',
	},
	title: 'Icon',
}

export default meta

const iconSizeRange = (
	<div className="flex flex-row items-center gap-8">
		{Array.from(iconSizeList).map((size) => (
			<div key={size} className="border border-neutral-200">
				<Icon
					key={size}
					name="square"
					size={size}
					className="text-neutral-500"
				/>
			</div>
		))}
	</div>
)

export const IconSizes = {
	render: () => iconSizeRange,
}
