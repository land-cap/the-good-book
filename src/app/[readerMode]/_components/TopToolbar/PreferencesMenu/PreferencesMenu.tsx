'use client'

import { Portal } from '@ark-ui/react'

import { Container_OverlayMenu, Positioner_OverlayMenu } from '~/components'

import {
	fontSizeAtom,
	hideNonOriginalText,
	isVerseBreaksLine,
	leadingAtom,
} from '../TopToolbar.state'
import { Header } from './Header'
import { PreferencesList } from './PreferencesMenu.styles'
import { SliderInput } from './SliderInput'
import { SwitchInput } from './SwitchInput'

export const PreferencesMenu = () => (
	<Portal>
		<Positioner_OverlayMenu>
			<Container_OverlayMenu>
				<Header />
				<PreferencesList>
					<SliderInput
						valueAtom={fontSizeAtom}
						label="Font size"
						machineProps={{
							id: 'font-size',
							name: 'font-size',
							min: 14,
							max: 22,
							step: 1,
						}}
					/>
					<SliderInput
						valueAtom={leadingAtom}
						label="Line gap"
						machineProps={{
							id: 'line-gap',
							name: 'line-gap',
							min: 1,
							max: 3,
							step: 0.25,
						}}
					/>
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
