import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from 'styled-system/jsx'
import { visuallyHidden } from 'styled-system/patterns'
import { IconButton as _IconButton, type IconButtonProps } from './IconButton'

const CONTROLS = ['visual'] as const

const DEFAULT_ARGS: IconButtonProps = {
	iconName: 'bolt',
}

const IconButtonSizeRange = ({
	sizes = new Set(['xs', 'sm', 'md', 'lg', 'xl']),
	...props
}: IconButtonProps & {
	sizes?: Set<IconButtonProps['size']>
}) => (
	<Flex flexFlow="row wrap" align="center" gap="8">
		{Array.from(sizes).map((size) => (
			<_IconButton key={size} {...props} size={size} />
		))}
	</Flex>
)

// fixes unexpected Storybook render bug
const IconButton = (props: IconButtonProps) => <></>

const meta: Meta<typeof _IconButton> = {
	title: 'Icon Button',
	component: IconButton,
	tags: ['autodocs'],
	argTypes: {
		visual: {
			options: ['primary', 'secondary', 'soft'],
			control: { type: 'radio' },
			defaultValue: 'secondary',
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

type Story = StoryObj<typeof IconButtonSizeRange>

const createStory = (story: Partial<Story>): Story => ({
	decorators: [
		(Story, context) => {
			const runtimeArgs = { ...DEFAULT_ARGS, ...context.args }
			return (
				<>
					<IconButtonSizeRange {...runtimeArgs} />
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
