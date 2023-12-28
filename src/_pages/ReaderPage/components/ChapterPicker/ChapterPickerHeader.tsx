import { Dialog, Tabs } from '@ark-ui/react'
import { css } from 'styled-system/css'
import { center, flex } from 'styled-system/patterns'
import { Icon, Separator } from '~/components'

const ButtonClose = () => (
	<Dialog.CloseTrigger
		className={center({
			_active: { color: 'fg.subtle' },
			_hover: { bg: 'bg.subtle' },
			h: '14',
			transition: 'colors',
			transitionDuration: 'fast',
			transitionTimingFunction: 'ease-in-out',
			w: '14',
		})}
	>
		<Icon size={6} name="close" />
	</Dialog.CloseTrigger>
)

const tabsTriggerCss = css({
	'&[data-selected]': {
		color: 'fg',
	},
	_active: { color: 'fg.subtle' },
	_hover: { bg: 'bg.subtle' },
	color: 'fg.subtle',
	fontWeight: 'bold',
	h: 'full',
	px: '4',
	transition: 'colors',
	transitionDuration: 'fast',
	transitionTimingFunction: 'ease-in-out',
})

const tabsIndicatorCss = css({
	bg: 'fg',
	height: '4px',
	transform: 'translateY(calc(-100% + 1px))',
	transitionDuration: 'fast',
	transitionTimingFunction: 'ease-in-out',
})

export const ChapterPickerHeader = () => (
	<div className={css({ gridColumn: 'content' })}>
		<div
			className={flex({ align: 'center', h: '14', justify: 'space-between' })}
		>
			<Tabs.List className={css({ h: 'full' })}>
				<Tabs.Trigger className={tabsTriggerCss} value="book">
					Book
				</Tabs.Trigger>
				<Tabs.Trigger className={tabsTriggerCss} value="chapter">
					Chapter
				</Tabs.Trigger>
				<Tabs.Indicator className={tabsIndicatorCss} />
			</Tabs.List>
			<ButtonClose />
		</div>
		<Separator />
	</div>
)
