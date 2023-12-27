'use client'

import { Dialog, Portal, Tabs } from '@ark-ui/react'
import { subgrid } from 'styled-system/patterns'
import { ChapterPickerContainer } from './ChapterPickerContainer'
import { ChapterPickerHeader } from './ChapterPickerHeader'
import { ChapterPickerList } from './ChapterPickerList'
import { ChapterPickerTrigger } from './ChapterPickerTrigger'

const tabsContentCss = subgrid({
	'&[data-state=closed]': {
		display: 'none',
	},
	gridColumn: 'fullbleed',
	h: 'full',
})

export const ChapterPicker = () => (
	<Dialog.Root>
		<ChapterPickerTrigger>Open Dialog</ChapterPickerTrigger>
		<Portal>
			<ChapterPickerContainer>
				<Tabs.Root
					defaultValue="book"
					className={subgrid({ column: 'fullbleed' })}
				>
					<ChapterPickerHeader />
					<Tabs.Content value="book" className={tabsContentCss}>
						<ChapterPickerList>
							<li>Book List Item</li>
						</ChapterPickerList>
					</Tabs.Content>
					<Tabs.Content value="chapter" className={tabsContentCss}>
						<ChapterPickerList>
							<li>Chapter List Item</li>
						</ChapterPickerList>
					</Tabs.Content>
				</Tabs.Root>
			</ChapterPickerContainer>
		</Portal>
	</Dialog.Root>
)
1
