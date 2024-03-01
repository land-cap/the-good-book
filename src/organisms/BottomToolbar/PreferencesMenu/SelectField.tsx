'use client'

import { Portal, Select as ArkSelect } from '@ark-ui/react'
import { css } from 'styled-system/css'

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
			<Select.Control>
				<Select.Trigger>
					<ArkSelect.ValueText placeholder={placeholder} />
					<ArkSelect.Indicator asChild>
						<Icon
							name="expand_more"
							size={6}
							className={css({
								mr: '-1.5',
							})}
						/>
					</ArkSelect.Indicator>
				</Select.Trigger>
			</Select.Control>
			<Portal>
				<ArkSelect.Positioner>
					<Select.Content>
						{itemList.map((item) => (
							<ArkSelect.Item key={item.value} item={item}>
								<ArkSelect.ItemText>{item.label}</ArkSelect.ItemText>
								<ArkSelect.ItemIndicator>✓</ArkSelect.ItemIndicator>
							</ArkSelect.Item>
						))}
					</Select.Content>
				</ArkSelect.Positioner>
			</Portal>
		</Select.Root>
	)
}
