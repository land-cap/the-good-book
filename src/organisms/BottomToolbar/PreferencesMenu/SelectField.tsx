'use client'

import { Portal, Select as ArkSelect } from '@ark-ui/react'

import { Icon } from '~/components'

import { Select } from './SelectField.styles'

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
			<ArkSelect.Control>
				<ArkSelect.Trigger>
					<ArkSelect.ValueText placeholder={placeholder} />
					<ArkSelect.Indicator>
						<Icon name="expand_more" />
					</ArkSelect.Indicator>
				</ArkSelect.Trigger>
			</ArkSelect.Control>
			<Portal>
				<ArkSelect.Positioner>
					<ArkSelect.Content>
						<ArkSelect.ItemGroup id="framework">
							<ArkSelect.ItemGroupLabel htmlFor="framework">
								Frameworks
							</ArkSelect.ItemGroupLabel>
							{itemList.map((item) => (
								<ArkSelect.Item key={item.value} item={item}>
									<ArkSelect.ItemText>{item.label}</ArkSelect.ItemText>
									<ArkSelect.ItemIndicator>✓</ArkSelect.ItemIndicator>
								</ArkSelect.Item>
							))}
						</ArkSelect.ItemGroup>
					</ArkSelect.Content>
				</ArkSelect.Positioner>
			</Portal>
		</Select.Root>
	)
}
