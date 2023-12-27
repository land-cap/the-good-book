'use client'

import { Dialog, Portal } from '@ark-ui/react'
import { ChapterPickerTrigger } from './ChapterPickerTrigger'

export const ChapterPicker = () => (
	<Dialog.Root>
		<ChapterPickerTrigger>Open Dialog</ChapterPickerTrigger>
		<Portal>
			<Dialog.Positioner className="fixed inset-0">
				<Dialog.Content className="h-full bg-bgSurface">
					<Dialog.Title>Dialog Title</Dialog.Title>
					<Dialog.Description>Dialog Description</Dialog.Description>
					<Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
				</Dialog.Content>
			</Dialog.Positioner>
		</Portal>
	</Dialog.Root>
)
1
