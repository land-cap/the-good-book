import { type Meta, type StoryObj } from '@storybook/react'
import { ToolBar } from '~/components/molecules/ToolBar'
import { type ReactNode } from 'react'
import { css } from 'styled-system/css'

const Container = ({ children }: { children: ReactNode }) => (
	<div
		className={css({
			'& > *': {
				display: 'flex !',
				position: 'static',
				width: 'fit-content',
				transform: 'unset',
			},
		})}>
		{children}
	</div>
)

const meta: Meta<typeof ToolBar> = {
	title: 'ToolBar',
	component: ToolBar,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<Container>
				<Story />
			</Container>
		),
	],
}

export default meta

type Story = StoryObj<typeof ToolBar>

export const _ToolBar: Story = {
	args: { chapter: 'Ioan 1' },
}
