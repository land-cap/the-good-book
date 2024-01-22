'use client'

import { Portal } from '@ark-ui/react'
import type { PrimitiveAtom } from 'jotai/index'

import {
	Backdrop,
	Container_OverlayMenu,
	Positioner_OverlayMenu,
} from '~/components'

import {
	fontSizeOffsetAtom,
	hideNonOriginalTextAtom,
	leadingAtom,
	showRedLettersAtom,
	verseBreaksLineAtom,
} from '../TopToolbar.state'
import { Header } from './Header'
import { PreferencesList } from './PreferencesMenu.styles'
import { SliderInput } from './SliderInput'
import { SwitchInput } from './SwitchInput'

export const PreferencesMenu = () => (
	<Portal>
		<Backdrop />
		<Positioner_OverlayMenu css={{ h: 'calc(100dvh / 3 * 2)' }}>
			<Container_OverlayMenu
				css={{
					h: 'calc(100dvh / 3 * 2)',
				}}
			>
				<Header />
				<PreferencesList>
					<SliderInput
						valueAtom={fontSizeOffsetAtom as PrimitiveAtom<number>}
						label="Font size"
						machineProps={{
							id: 'font-size',
							name: 'font-size',
							min: -2,
							max: 8,
							step: 1,
						}}
					/>
					<SliderInput
						valueAtom={leadingAtom as PrimitiveAtom<number>}
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
						valueAtom={verseBreaksLineAtom}
						label="Start verse on new line"
					/>
					<SwitchInput
						valueAtom={hideNonOriginalTextAtom}
						label="Hide non-original text"
					/>
					<SwitchInput valueAtom={showRedLettersAtom} label="Red letters" />
				</PreferencesList>
			</Container_OverlayMenu>
		</Positioner_OverlayMenu>
	</Portal>
)
