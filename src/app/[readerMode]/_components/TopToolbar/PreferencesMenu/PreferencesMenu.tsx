'use client'

import { Portal } from '@ark-ui/react'
import { useAtom, useAtomValue } from 'jotai'

import {
	Container_OverlayMenu,
	Positioner_OverlayMenu,
	useDisableBodyScrollWhileDialogIsOpen,
} from '~/components'

import {
	isPreferencesMenuOpenAtom,
	leadingAtom,
	shouldVerseBreakLine,
} from '../TopToolbar.state'
import { FontSizeInput } from './FontSizeInput'
import { Header } from './Header'
import { LeadingInput } from './LeadingInput'
import { PreferencesList } from './PreferencesMenu.styles'
import { SwitchInput } from './SwitchInput'

export const PreferencesMenu = () => {
	const [isDialogOpen, setIsDialogOpen] = useAtom(isPreferencesMenuOpenAtom)

	useDisableBodyScrollWhileDialogIsOpen({ isDialogOpen })

	const leading = useAtomValue(leadingAtom)

	return (
		<Portal>
			<Positioner_OverlayMenu>
				<Container_OverlayMenu>
					<Header />
					<PreferencesList>
						<FontSizeInput />
						<LeadingInput />
						<SwitchInput
							valueAtom={shouldVerseBreakLine}
							label="Start verse on new line"
						/>
					</PreferencesList>
				</Container_OverlayMenu>
			</Positioner_OverlayMenu>
		</Portal>
	)
}
