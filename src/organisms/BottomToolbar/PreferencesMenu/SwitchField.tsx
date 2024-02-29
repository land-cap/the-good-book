'use client'

import { type PrimitiveAtom, useAtom } from 'jotai'
import { styled, VStack } from 'styled-system/jsx'
import { flex } from 'styled-system/patterns'

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
		<styled.div css={flex.raw({ direction: 'column', gap: '2' })}>
			<Switch.Root
				checked={checked}
				onCheckedChange={(e) => setChecked(e.checked)}
			>
				<VStack alignItems="start" gap="1">
					<Switch.Label>{label}</Switch.Label>
					{!!message && <Switch.Message>{message}</Switch.Message>}
				</VStack>
				<Switch.Control>
					<Switch.Thumb />
				</Switch.Control>
			</Switch.Root>
		</styled.div>
	)
}
