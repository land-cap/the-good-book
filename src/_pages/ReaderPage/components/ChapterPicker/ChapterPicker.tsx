'use client'

import { Dialog, Portal, Tabs } from '@ark-ui/react'
import { subgrid } from 'styled-system/patterns'
import { ChapterPickerContainer } from './ChapterPickerContainer'
import { ChapterPickerHeader } from './ChapterPickerHeader'
import { ChapterPickerTrigger } from './ChapterPickerTrigger'

export const ChapterPicker = () => (
	<Dialog.Root>
		<ChapterPickerTrigger>Open Dialog</ChapterPickerTrigger>
		<Portal>
			<ChapterPickerContainer>
				<Tabs.Root className={subgrid({ column: 'fullbleed' })}>
					<ChapterPickerHeader />
					<Tabs.Content value="book">React Content</Tabs.Content>
					<Tabs.Content value="chapter">Vue Content</Tabs.Content>
				</Tabs.Root>
			</ChapterPickerContainer>
		</Portal>
	</Dialog.Root>
)
1
