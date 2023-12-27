'use client'

import { Dialog, Portal } from '@ark-ui/react'
import { ChapterPickerContainer } from '~/_pages/ReaderPage/components/ChapterPicker/ChapterPickerContainer'
import { ChapterPickerTrigger } from './ChapterPickerTrigger'

export const ChapterPicker = () => (
	<Dialog.Root>
		<ChapterPickerTrigger>Open Dialog</ChapterPickerTrigger>
		<Portal>
			<ChapterPickerContainer>
				<Dialog.Title>Dialog Title</Dialog.Title>
				<Dialog.Description>Dialog Description</Dialog.Description>
				<Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
			</ChapterPickerContainer>
		</Portal>
	</Dialog.Root>
)
1
