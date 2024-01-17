'use client'

import { Dialog, Portal } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'

import { Container_OverlayMenu, Positioner_OverlayMenu } from '~/components'

import {
	fontSizeAtom,
	hideNonOriginalTextAtom,
	isVerseBreaksLineAtom,
	leadingAtom,
	showRedLettersAtom,
} from '../TopToolbar.state'
import { Header } from './Header'
import { PreferencesList } from './PreferencesMenu.styles'
import { SliderInput } from './SliderInput'
import { SwitchInput } from './SwitchInput'

const Backdrop = styled(Dialog.Backdrop, {
	base: {
		forceGpu: true,
		'--opacity': 'calc(1 / 3)',
		pos: 'fixed',
		zIndex: 1,
		inset: 0,
		opacity: 'var(--opacity)',
		bg: 'bg.inverted',
		_open: { animation: 'fadeIn 0.15s ease-out' },
		_closed: { animation: 'fadeOut 0.1s ease-in' },
	},
})

export const PreferencesMenu = () => (
	<Portal>
		<Backdrop />
		<Positioner_OverlayMenu css={{ h: 'calc(100dvh / 3 * 2)' }}>
			<Container_OverlayMenu css={{ h: 'calc(100dvh / 3 * 2)' }}>
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
						valueAtom={isVerseBreaksLineAtom}
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
