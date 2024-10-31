import { Dialog, Tabs } from '@ark-ui/react'
import { useSetAtom } from 'jotai'
import { css, cx } from 'styled-system/css'
import { hstack, macrogrid } from 'styled-system/patterns'
import { button } from 'styled-system/recipes'

import { Icon, Separator } from '~/components'

import {
	activeTabAtom,
	type TChapterPickerTab,
} from './chapterPickerMenu.state'

const tabsTriggerCls = cx(
	button({ size: 'xl' }),
	css({
		'&:not([data-selected])': {
			color: 'fg.faded',
		},
		fontWeight: 'bold',
		h: 'full',
	}),
)

export const Header = () => {
	const setActiveTab = useSetAtom(activeTabAtom)

	const handleClickTabTrigger = (tab: TChapterPickerTab) => {
		setActiveTab(tab)
	}

	return (
		<div className={macrogrid()}>
			<div className={css({ column: 'content' })}>
				<div className={hstack({ h: '14', justify: 'space-between' })}>
					<Tabs.List className={hstack({ h: 'full', gap: '0' })}>
						<Tabs.Trigger
							className={tabsTriggerCls}
							value="book"
							onClick={() => handleClickTabTrigger('book')}
						>
							Book
						</Tabs.Trigger>
						<Tabs.Trigger
							className={tabsTriggerCls}
							value="chapter"
							onClick={() => handleClickTabTrigger('chapter')}
						>
							Chapter
						</Tabs.Trigger>
					</Tabs.List>
					<Dialog.CloseTrigger className={button({ icon: true, size: 'xl' })}>
						<Icon size={6} name="close" />
					</Dialog.CloseTrigger>
				</div>
			</div>
			<Separator css={{ column: 'content' }} />
		</div>
	)
}
