'use client'

import { Portal } from '@ark-ui/react'
import { useAtom } from 'jotai'

import {
	Container_OverlayMenu,
	Positioner_OverlayMenu,
	useDisableBodyScrollWhileDialogIsOpen,
} from '~/components'

import {
	hideNonOriginalText,
	isPreferencesMenuOpenAtom,
	isVerseBreaksLine,
} from '../TopToolbar.state'
import { FontSizeInput } from './FontSizeInput'
import { Header } from './Header'
import { LeadingInput } from './LeadingInput'
import { PreferencesList } from './PreferencesMenu.styles'
import { SwitchInput } from './SwitchInput'

export const PreferencesMenu = () => {
	const [isDialogOpen, setIsDialogOpen] = useAtom(isPreferencesMenuOpenAtom)

	useDisableBodyScrollWhileDialogIsOpen({ isDialogOpen })

	return (
		<Portal>
			<Positioner_OverlayMenu>
				<Container_OverlayMenu>
					<Header />
					<PreferencesList>
						<FontSizeInput />
						<LeadingInput />
						<SwitchInput
							valueAtom={isVerseBreaksLine}
							label="Start verse on new line"
						/>
						<SwitchInput
							valueAtom={hideNonOriginalText}
							label="Hide non-original text"
						/>
					</PreferencesList>
				</Container_OverlayMenu>
			</Positioner_OverlayMenu>
		</Portal>
	)
}
