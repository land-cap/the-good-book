'use client'

import { Portal, Select } from '@ark-ui/react'
import { ChevronDownIcon } from 'lucide-react'

const ChapterPickerButton = ({
	bookName,
	chapter,
}: {
	chapter: string
	bookName: string
}) => (
	<button className="flex h-full grow place-items-center justify-center px-4 text-sm font-bold transition duration-quick ease-in-out hover:bg-bgSubtle sm:text-base">
		{bookName} {chapter}
	</button>
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
		<Select.Root
			items={items}
			className="flex h-full grow place-items-center justify-center"
		>
			<Select.Control>
				<Select.Trigger className="flex h-full grow place-items-center justify-center px-4 text-sm font-bold transition duration-quick ease-in-out hover:bg-bgSubtle sm:text-base">
					<Select.ValueText placeholder={`${bookName} ${chapter}`} />
					<Select.Indicator>
						<ChevronDownIcon />
					</Select.Indicator>
				</Select.Trigger>
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
