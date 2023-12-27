'use client'

import { Dialog, Portal } from '@ark-ui/react'
import { css } from 'styled-system/css'
import { ChapterPickerTrigger } from './ChapterPickerTrigger'

export const ChapterPicker = () => (
	<Dialog.Root>
		<ChapterPickerTrigger>Open Dialog</ChapterPickerTrigger>
		<Portal>
			<Dialog.Positioner className={css({ inset: '0', position: 'fixed' })}>
				<Dialog.Content className={css({ bg: 'bg.surface', h: 'full' })}>
					<Dialog.Title>Dialog Title</Dialog.Title>
					<Dialog.Description>Dialog Description</Dialog.Description>
					<Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
				</Dialog.Content>
			</Dialog.Positioner>
		</Portal>
	</Dialog.Root>
)
1
