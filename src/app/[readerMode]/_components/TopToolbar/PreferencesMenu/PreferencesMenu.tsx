'use client'

import { Portal } from '@ark-ui/react'
import { useAtom, useAtomValue } from 'jotai'
import { useEffect } from 'react'

import { LeadingInput } from '~/app/[readerMode]/_components/TopToolbar/PreferencesMenu/LeadingInput'
import {
	Container_OverlayMenu,
	Positioner_OverlayMenu,
	useDisableBodyScrollWhileDialogIsOpen,
} from '~/components'

import { isPreferencesMenuOpenAtom, leadingAtom } from '../TopToolbar.state'
import { FontSizeInput } from './FontSizeInput'
import { Header } from './Header'
import { PreferencesList } from './PreferencesMenu.styles'

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
						<FontSizeInput />
						<LeadingInput />
					</PreferencesList>
				</Container_OverlayMenu>
			</Positioner_OverlayMenu>
		</Portal>
	)
}
