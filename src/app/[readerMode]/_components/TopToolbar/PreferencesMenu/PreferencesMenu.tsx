'use client'

import { Portal } from '@ark-ui/react'
import { useAtom } from 'jotai'

import { LeadingInput } from '~/app/[readerMode]/_components/TopToolbar/PreferencesMenu/LeadingInput'
import { PreferencesList } from '~/app/[readerMode]/_components/TopToolbar/PreferencesMenu/PreferencesMenu.styles'
import {
	Container_OverlayMenu,
	Positioner_OverlayMenu,
	useDisableBodyScrollWhileDialogIsOpen,
} from '~/components'

import { isPreferencesMenuOpenAtom } from '../TopToolbar.state'
import { Header } from './Header'

export const PreferencesMenu = () => {
	const [isDialogOpen, setIsDialogOpen] = useAtom(isPreferencesMenuOpenAtom)

	useDisableBodyScrollWhileDialogIsOpen({ isDialogOpen })

	return (
		<Portal>
			<Positioner_OverlayMenu>
				<Container_OverlayMenu>
					<Header />
					<PreferencesList>
						<LeadingInput />
					</PreferencesList>
				</Container_OverlayMenu>
			</Positioner_OverlayMenu>
		</Portal>
	)
}
