'use client'

import { Portal } from '@ark-ui/react'
import { useAtom, useAtomValue } from 'jotai'
import { useEffect } from 'react'

import {
	Container_OverlayMenu,
	Positioner_OverlayMenu,
	useDisableBodyScrollWhileDialogIsOpen,
} from '~/components'

import { isPreferencesMenuOpenAtom, leadingAtom } from '../TopToolbar.state'
import { Header } from './Header'
import { PreferencesList } from './PreferencesMenu.styles'
import { SliderInput } from './SliderInput'

export const PreferencesMenu = () => {
	const [isDialogOpen, setIsDialogOpen] = useAtom(isPreferencesMenuOpenAtom)

	useDisableBodyScrollWhileDialogIsOpen({ isDialogOpen })

	const leading = useAtomValue(leadingAtom)

	useEffect(() => {
		console.log(leading)
	}, [leading])

	return (
		<Portal>
			<Positioner_OverlayMenu>
				<Container_OverlayMenu>
					<Header />
					<PreferencesList>
						<SliderInput
							inputName="font-size"
							inputLabel="Text size"
							valueAtom={leadingAtom}
						/>
						<SliderInput
							inputName="leading"
							inputLabel="Line height"
							valueAtom={leadingAtom}
						/>
					</PreferencesList>
				</Container_OverlayMenu>
			</Positioner_OverlayMenu>
		</Portal>
	)
}
