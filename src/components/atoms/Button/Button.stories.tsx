import type { Meta, StoryObj } from '@storybook/react'
import { Button, type ButtonProps } from './Button'
import { Flex } from 'styled-system/jsx'
import { visuallyHidden } from 'styled-system/patterns'

const CONTROLS = ['visual', 'label', 'rounded'] as const

const DEFAULT_ARGS: ButtonProps = {
	label: 'Button',
}

const ICON_NAME = 'bolt'

const ButtonSizeRange = ({
	sizes = new Set(['xs', 'sm', 'md', 'lg', 'xl']),
	...props
}: ButtonProps & {
	sizes?: Set<ButtonProps['size']>
}) => (
	<Flex flexFlow="row wrap" align="center" gap="8">
		{Array.from(sizes).map((size) => (
			<Button key={size} {...props} size={size} />
		))}
	</Flex>
)

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		label: {
			type: 'string',
		},
		visual: {
			options: ['primary', 'secondary', 'soft'],
			control: { type: 'radio' },
			defaultValue: 'secondary',
		},
		rounded: {
			control: { type: 'boolean' },
			defaultValue: true,
		},
	},
	parameters: {
		layout: 'centered',
		docs: {
			controls: { include: CONTROLS },
		},
	},
}

export default meta

type Story = StoryObj<typeof ButtonSizeRange>

const createStory = (story: Partial<Story>): Story => ({
	decorators: [
		(Story, context) => {
			const runtimeArgs = { ...DEFAULT_ARGS, ...context.args }
			return (
				<>
					<ButtonSizeRange {...runtimeArgs} />
					<div className={visuallyHidden()}>
						<Story />
					</div>
				</>
			)
		},
		...(story.decorators ?? []),
	],
	...story,
	parameters: {
		controls: { include: CONTROLS },
	},
})

export const Primary: Story = createStory({
	args: {
		visual: 'primary',
	},
})

export const Secondary: Story = createStory({
	args: {
		visual: 'secondary',
	},
})

export const Soft: Story = createStory({
	args: {
		visual: 'soft',
	},
})

export const RoundedPrimary: Story = createStory({
	args: {
		visual: 'primary',
		rounded: true,
	},
})

export const RoundedSecondary: Story = createStory({
	args: {
		visual: 'secondary',
		rounded: true,
	},
})

export const RoundedSoft: Story = createStory({
	args: {
		visual: 'soft',
		rounded: true,
	},
})

export const WithLeftIconPrimary: Story = createStory({
	args: {
		visual: 'primary',
		leftIcon: ICON_NAME,
	},
})

export const WithIconSecondary: Story = createStory({
	args: {
		visual: 'secondary',
		leftIcon: ICON_NAME,
	},
})

export const WithIconSoft: Story = createStory({
	args: {
		visual: 'soft',
		leftIcon: ICON_NAME,
	},
})

export const WithRightIconPrimary: Story = createStory({
	args: {
		visual: 'primary',
		rightIcon: ICON_NAME,
	},
})

export const WithRightIconSecondary: Story = createStory({
	args: {
		visual: 'secondary',
		rightIcon: ICON_NAME,
	},
})

export const WithRightIconSoft: Story = createStory({
	args: {
		visual: 'soft',
		rightIcon: ICON_NAME,
	},
})
