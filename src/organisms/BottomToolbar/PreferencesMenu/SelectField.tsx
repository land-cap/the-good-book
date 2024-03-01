import { Portal, Select as ArkSelect } from '@ark-ui/react'
import { useAtom } from 'jotai/index'
import { css } from 'styled-system/css'

import { Icon } from '~/components'
import { fontAtom, fontDefaultValue, type TFont } from '~/state'

import { Select } from './SelectField.styles'

export type TSelectOption = { value: string; label: string }

const fontOptionList: TSelectOption[] = [
	{ value: 'sans', label: 'Sans-serif' },
	{ value: 'serif', label: 'Serif' },
	{ value: 'soft', label: 'Soft' },
	{ value: 'dyslexic', label: 'Dyslexic' },
]

export const SelectField = () => {
	const [font, setFont] = useAtom(fontAtom)

	return (
		<Select.Root
			id="font"
			items={fontOptionList}
			value={[font]}
			onValueChange={({ value }) => {
				setFont(
					value.length && value[0] ? (value[0] as TFont) : fontDefaultValue,
				)
			}}
			positioning={{ offset: { mainAxis: 0 } }}
		>
			<Select.Label>Font</Select.Label>
			<Select.Control>
				<Select.Trigger>
					<Select.ValueText font={font} />
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
						{fontOptionList.map((item) => (
							<Select.Item key={item.value} item={item}>
								<Select.ItemText font={item.value as TFont}>
									{item.label}
								</Select.ItemText>
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
