'use client'

import { type PrimitiveAtom, useAtom } from 'jotai'
import { Flex } from 'styled-system/jsx'

import { Switch } from './SwitchField.styles'

export const SwitchField = ({
	valueAtom,
	label,
	message,
}: {
	valueAtom: PrimitiveAtom<boolean>
	label: string
	message?: string
}) => {
	const [checked, setChecked] = useAtom(valueAtom)

	return (
		<Flex direction="column" gap="0">
			<Switch.Root
				checked={checked}
				onCheckedChange={(e) => setChecked(e.checked)}
			>
				<Switch.Label>{label}</Switch.Label>
				<Switch.Control>
					<Switch.Thumb />
				</Switch.Control>
			</Switch.Root>
			{!!message && <Switch.Message>{message}</Switch.Message>}
		</Flex>
	)
}
