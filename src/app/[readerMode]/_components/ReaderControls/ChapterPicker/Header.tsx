import { Dialog, Tabs } from '@ark-ui/react'
import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { center, hstack, macrogrid } from 'styled-system/patterns'

import { Icon, Separator } from '~/components'

const DialogCloseTrigger = styled(Dialog.CloseTrigger, {
	base: center.raw({
		_active: { bg: 'bg.subtle', color: 'fg.subtle' },
		_canHover: { _hover: { bg: 'bg.subtle' } },
		color: 'fg.muted',
		h: '14',
		transition: 'colors',
		transitionDuration: 'fast',
		transitionTimingFunction: 'ease-out',
		w: '14',
	}),
})

const TabsTrigger = styled(Tabs.Trigger, {
	base: {
		'&:not([data-selected])': {
			color: 'fg.faded',
		},
		_active: { bg: 'bg.subtle', color: 'fg.subtle' },
		_canHover: { _hover: { bg: 'bg.subtle' } },
		fontWeight: 'bold',
		h: 'full',
		px: '4',
		transition: 'colors',
		transitionDuration: 'fast',
		transitionTimingFunction: 'ease-out',
	},
})

export const Header = ({
	onTabsTriggerClick,
}: {
	onTabsTriggerClick: () => void
}) => (
	<div className={macrogrid()}>
		<div className={css({ column: 'content' })}>
			<div className={hstack({ h: '14', justify: 'space-between' })}>
				<Tabs.List className={css({ h: 'full' })}>
					<TabsTrigger value="book" onClick={onTabsTriggerClick}>
						Book
					</TabsTrigger>
					<TabsTrigger value="chapter" onClick={onTabsTriggerClick}>
						Chapter
					</TabsTrigger>
				</Tabs.List>
				<DialogCloseTrigger>
					<Icon size={6} name="close" />
				</DialogCloseTrigger>
			</div>
		</div>
		<Separator css={{ column: 'content' }} />
	</div>
)
