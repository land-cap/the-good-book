'use client'

import { Portal, Select } from '@ark-ui/react'

import { Icon } from '~/components'

export type TSelectOption = { value: string; label: string }

export const SelectField = ({
	label,
	itemList,
	value,
	onValueChange,
	placeholder,
}: {
	label: string
	itemList: TSelectOption[]
	value: string[]
	onValueChange: (value: string[]) => void
	placeholder?: string
}) => {
	return (
		<Select.Root
			id={label}
			items={itemList}
			value={value}
			onValueChange={(e) => onValueChange(e.value)}
		>
			<Select.Label>{label}</Select.Label>
			<Select.Control>
				<Select.Trigger>
					<Select.ValueText placeholder={placeholder} />
					<Select.Indicator>
						<Icon name="expand_more" />
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
							{itemList.map((item) => (
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
