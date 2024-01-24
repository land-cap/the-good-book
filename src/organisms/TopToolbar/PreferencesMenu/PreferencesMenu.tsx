'use client'

import { Portal } from '@ark-ui/react'
import { macrogrid } from 'styled-system/patterns'

import {
	Backdrop_OverlayMenu,
	Container_OverlayMenu,
	Positioner_OverlayMenu,
} from '~/components'
import { IncrementInput } from '~/organisms/TopToolbar/PreferencesMenu/IncrementInput'

import {
	hideNonOriginalTextAtom,
	showRedLettersAtom,
	verseBreaksLineAtom,
} from '../TopToolbar.state'
import { Header } from './Header'
import { PreferencesList } from './PreferencesMenu.styles'
import { SwitchInput } from './SwitchInput'

export const PreferencesMenu = () => (
	<Portal>
		<Backdrop_OverlayMenu opacity="1/2" />
		<Positioner_OverlayMenu css={{ h: 'content' }}>
			<Container_OverlayMenu
				css={{
					h: 'content',
					maxH: 'calc(100dvh * 2 / 3)',
					pb: 'safe_area_bottom',
					shadow:
						// upside down fluent 2 shadow
						'0px 0px 8px 0px rgba(0, 0, 0, 0.20), 0px -32px 64px 0px rgba(0, 0, 0, 0.24)',
					_osDark: {
						bg: 'bg.subtle',
					},
				}}
			>
				<div className={macrogrid()}>
					<Header />
					<PreferencesList>
						<IncrementInput
							label="Text size"
							decreaseIcon="text_decrease"
							increaseIcon="text_increase"
						/>
						<IncrementInput
							label="Line spacing"
							decreaseIcon="density_small"
							increaseIcon="density_medium"
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
				</div>
			</Container_OverlayMenu>
		</Positioner_OverlayMenu>
	</Portal>
)
