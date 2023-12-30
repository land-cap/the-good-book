import { Tabs } from '@ark-ui/react'
import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { center, flex } from 'styled-system/patterns'

import { Icon, Separator } from '../../../atoms'

const ButtonClose = styled('button', {
	base: center.raw({
		_active: { bg: 'bg.subtle', color: 'fg.subtle' },
		_canHover: { _hover: { bg: 'bg.subtle' } },
		h: '14',
		transition: 'colors',
		transitionDuration: 'fast',
		transitionTimingFunction: 'ease-out',
		w: '14',
	}),
})

const TabsTrigger = styled(Tabs.Trigger, {
	base: {
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
	},
})

export const Header_ChapterPicker = ({
	onTabsTriggerClick,
	onCloseButtonClick,
}: {
	onTabsTriggerClick: () => void
	onCloseButtonClick: () => void
}) => (
	<div className={css({ gridColumn: 'content' })}>
		<div
			className={flex({ align: 'center', h: '14', justify: 'space-between' })}
		>
			<Tabs.List className={css({ h: 'full' })}>
				<TabsTrigger value="book" onClick={onTabsTriggerClick}>
					Book
				</TabsTrigger>
				<TabsTrigger value="chapter" onClick={onTabsTriggerClick}>
					Chapter
				</TabsTrigger>
			</Tabs.List>
			<ButtonClose onClick={onCloseButtonClick}>
				<Icon size={6} name="close" />
			</ButtonClose>
		</div>
		<Separator />
	</div>
)
