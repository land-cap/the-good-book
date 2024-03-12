import { Dialog, Tabs } from '@ark-ui/react'
import { css, cx } from 'styled-system/css'
import { hstack, macrogrid } from 'styled-system/patterns'
import { button } from 'styled-system/recipes'

import { Icon, Separator } from '~/components'

const tabsTriggerClass = cx(
	button(),
	css({
		'&:not([data-selected])': {
			color: 'fg.faded',
		},
		fontWeight: 'bold',
		h: 'full',
	}),
)

export const Header = ({
	onTabsTriggerClick,
}: {
	onTabsTriggerClick: () => void
}) => (
	<div className={macrogrid()}>
		<div className={css({ column: 'content' })}>
			<div className={hstack({ h: '14', justify: 'space-between' })}>
				<Tabs.List className={hstack({ h: 'full', gap: '0' })}>
					<Tabs.Trigger
						className={tabsTriggerClass}
						value="book"
						onClick={onTabsTriggerClick}
					>
						Book
					</Tabs.Trigger>
					<Tabs.Trigger
						className={tabsTriggerClass}
						value="chapter"
						onClick={onTabsTriggerClick}
					>
						Chapter
					</Tabs.Trigger>
				</Tabs.List>
				<Dialog.CloseTrigger className={button({ icon: true })}>
					<Icon size={6} code="&#xe732;" />
				</Dialog.CloseTrigger>
			</div>
		</div>
		<Separator css={{ column: 'content' }} />
	</div>
)
