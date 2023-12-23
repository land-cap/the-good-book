'use client'

import { Portal, Select } from '@ark-ui/react'

const ChapterPickerTrigger = ({ placeholder }: { placeholder: string }) => (
	<Select.Trigger className="flex h-full w-full place-items-center justify-center px-4 text-sm font-bold text-fgSubtle transition duration-quick ease-in-out hover:bg-bgSubtle active:text-fg sm:text-base">
		<Select.ValueText placeholder={placeholder} />
	</Select.Trigger>
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
		{ label: 'Svelte', value: 'svelte', disabled: true },
	]
	return (
		<Select.Root items={items} className="h-full grow">
			<Select.Control className="h-full w-full">
				<ChapterPickerTrigger placeholder={`${bookName} ${chapter}`} />
				<Select.ClearTrigger>Clear</Select.ClearTrigger>
			</Select.Control>
			<Portal>
				<Select.Positioner>
					<Select.Content>
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
					</Select.Content>
				</Select.Positioner>
			</Portal>
		</Select.Root>
	)
}
