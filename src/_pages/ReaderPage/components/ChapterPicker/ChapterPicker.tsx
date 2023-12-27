'use client'

import { Dialog, Portal, Tabs } from '@ark-ui/react'
import { subgrid } from 'styled-system/patterns'
import { ChapterPickerListItem } from '~/_pages/ReaderPage/components/ChapterPicker/ChapterPickerListItem'
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
							<ChapterPickerListItem>Book List Item</ChapterPickerListItem>
						</ChapterPickerList>
					</Tabs.Content>
					<Tabs.Content value="chapter" className={tabsContentCss}>
						<ChapterPickerList>
							<ChapterPickerListItem>Chapter List Item</ChapterPickerListItem>
						</ChapterPickerList>
					</Tabs.Content>
				</Tabs.Root>
			</ChapterPickerContainer>
		</Portal>
	</Dialog.Root>
)
1
