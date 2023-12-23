'use client'

import { Portal, Select } from '@ark-ui/react'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { macroGridCls } from '~/components'

const ChapterPickerTrigger = ({ placeholder }: { placeholder: string }) => (
	<Select.Trigger className="flex h-full w-full place-items-center justify-center px-4 text-sm font-bold text-fgSubtle transition duration-quick ease-in-out hover:bg-bgSubtle active:text-fg sm:text-base">
		<Select.ValueText placeholder={placeholder} />
	</Select.Trigger>
)

const SelectContainer = ({ children }: { children: React.ReactNode }) => (
	<Select.Positioner
		asChild
		className={twMerge(
			'fixed -left-2 h-[calc(100dvh_-_57px)] w-full bg-bgCanvas',
		)}
		style={{ top: 7, left: undefined }}
	>
		<Select.Content>
			<div className={twMerge(macroGridCls, 'h-full')}>
				<div className="col-[content]">{children}</div>
			</div>
		</Select.Content>
	</Select.Positioner>
)

export const ChapterPicker = ({
	bookName,
	chapter,
}: {
	chapter: string
	bookName: string
}) => {
	type Item = { label: string; value: string; disabled?: boolean }

	const items: Item[] = [
		{ label: 'React', value: 'react' },
		{ label: 'Solid', value: 'solid' },
		{ label: 'Vue', value: 'vue' },
	]

	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : 'unset'
	}, [isOpen])

	return (
		<Select.Root
			items={items}
			className="h-full grow"
			onOpenChange={({ open }) => setIsOpen(open)}
		>
			<Select.Control className="h-full w-full">
				<ChapterPickerTrigger placeholder={`${bookName} ${chapter}`} />
				<Select.ClearTrigger>Clear</Select.ClearTrigger>
			</Select.Control>
			<Portal>
				<SelectContainer>
					<Select.ItemGroup id="framework">
						<Select.ItemGroupLabel htmlFor="framework">
							Frameworks
						</Select.ItemGroupLabel>
						{items.map((item) => (
							<Select.Item key={item.value} item={item}>
								<Select.ItemText>{item.label}</Select.ItemText>
								<Select.ItemIndicator>✓</Select.ItemIndicator>
							</Select.Item>
						))}
					</Select.ItemGroup>
				</SelectContainer>
			</Portal>
		</Select.Root>
	)
}
