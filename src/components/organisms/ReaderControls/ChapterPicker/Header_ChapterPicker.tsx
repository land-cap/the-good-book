import { Dialog, Tabs } from '@ark-ui/react'
import { css } from 'styled-system/css'
import { center, flex } from 'styled-system/patterns'

import { Icon, Separator } from '../../../atoms'

const ButtonClose = () => (
	<Dialog.CloseTrigger
		className={center({
			_active: { bg: 'bg.subtle', color: 'fg.subtle' },
			_canHover: { _hover: { bg: 'bg.subtle' } },
			h: '14',
			transition: 'colors',
			transitionDuration: 'fast',
			transitionTimingFunction: 'ease-out',
			w: '14',
		})}
	>
		<Icon size={24} name="X" />
	</Dialog.CloseTrigger>
)

const tabsTriggerCss = css({
	'&[data-selected]': {
		color: 'fg',
	},
	_active: { bg: 'bg.subtle', color: 'fg.subtle' },
	_canHover: { _hover: { bg: 'bg.subtle' } },
	color: 'fg.faded',
	fontWeight: 'bold',
	h: 'full',
	px: '4',
	transition: 'colors',
	transitionDuration: 'fast',
	transitionTimingFunction: 'ease-out',
})

export const Header_ChapterPicker = ({
	onTabsTriggerClick,
}: {
	onTabsTriggerClick: () => void
}) => (
	<div className={css({ gridColumn: 'content' })}>
		<div
			className={flex({ align: 'center', h: '14', justify: 'space-between' })}
		>
			<Tabs.List className={css({ h: 'full' })}>
				<Tabs.Trigger
					value="book"
					onClick={onTabsTriggerClick}
					className={tabsTriggerCss}
				>
					Book
				</Tabs.Trigger>
				<Tabs.Trigger
					value="chapter"
					onClick={onTabsTriggerClick}
					className={tabsTriggerCss}
				>
					Chapter
				</Tabs.Trigger>
			</Tabs.List>
			<ButtonClose />
		</div>
		<Separator />
	</div>
)
