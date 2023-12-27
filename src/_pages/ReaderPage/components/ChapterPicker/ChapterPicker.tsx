'use client'

import { Dialog, Portal } from '@ark-ui/react'
import { ChapterPickerContainer } from './ChapterPickerContainer'
import { ChapterPickerHeader } from './ChapterPickerHeader'
import { ChapterPickerTrigger } from './ChapterPickerTrigger'

export const ChapterPicker = () => (
	<Dialog.Root>
		<ChapterPickerTrigger>Open Dialog</ChapterPickerTrigger>
		<Portal>
			<ChapterPickerContainer>
				<ChapterPickerHeader />
			</ChapterPickerContainer>
		</Portal>
	</Dialog.Root>
)
1
