'use client'

import { type PrimitiveAtom, useAtom } from 'jotai'
import { Flex } from 'styled-system/jsx'

import { Switch } from './SwitchField.styles'

export const SwitchField = ({
	valueAtom,
	label,
	message,
	disabled,
}: {
	valueAtom: PrimitiveAtom<boolean>
	label: string
	message?: string
	disabled?: boolean
}) => {
	const [checked, setChecked] = useAtom(valueAtom)

	return (
		<Flex direction="column" gap="0">
			<Switch.Root
				checked={checked}
				onCheckedChange={(e) => setChecked(e.checked)}
				disabled={disabled}
			>
				<Switch.Label disabled={disabled}>{label}</Switch.Label>
				<Switch.Control disabled={disabled}>
					<Switch.Thumb disabled={disabled} />
				</Switch.Control>
			</Switch.Root>
			{!!message && <Switch.Message>{message}</Switch.Message>}
		</Flex>
	)
}
