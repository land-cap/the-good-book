'use client'

import { type PrimitiveAtom, useAtom } from 'jotai'

import { Switch } from './SwitchInput.styles'

export const SwitchInput = ({
	valueAtom,
	label,
}: {
	valueAtom: PrimitiveAtom<boolean>
	label: string
}) => {
	const [checked, setChecked] = useAtom(valueAtom)

	return (
		<Switch.Root
			checked={checked}
			onCheckedChange={(e) => setChecked(e.checked)}
		>
			<Switch.Label>{label}</Switch.Label>
			<Switch.Control>
				<Switch.Thumb />
			</Switch.Control>
		</Switch.Root>
	)
}
