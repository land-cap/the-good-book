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
			positioning={{ offset: { mainAxis: 0 } }}
		>
			<Select.Label>{label}</Select.Label>
			<Select.Control>
				<Select.Trigger>
					<ArkSelect.ValueText placeholder={placeholder} />
					<ArkSelect.Indicator asChild>
						<Icon
							name="arrow_drop_down"
							size={6}
							className={css({
								mr: '-2',
							})}
						/>
					</ArkSelect.Indicator>
				</Select.Trigger>
			</Select.Control>
			<Portal>
				<ArkSelect.Positioner className={css({ w: 'var(--reference-width)' })}>
					<Select.Content>
						{itemList.map((item) => (
							<Select.Item key={item.value} item={item}>
								<Select.ItemText>{item.label}</Select.ItemText>
								<Select.ItemIndicator>
									<Icon
										name="check"
										size={5}
										weight={500}
										className={css({
											mr: '-2',
										})}
									/>
								</Select.ItemIndicator>
							</Select.Item>
						))}
					</Select.Content>
				</ArkSelect.Positioner>
			</Portal>
		</Select.Root>
	)
}
