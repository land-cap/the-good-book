'use client'

import { Portal } from '@ark-ui/react'
import { useAtom } from 'jotai'
import { range } from 'ramda'
import { useCallback } from 'react'
import { macrogrid } from 'styled-system/patterns'

import {
	Backdrop_OverlayMenu,
	Container_OverlayMenu,
	Positioner_OverlayMenu,
} from '~/components'
import { steppedRange } from '~/helpers/steppedRange'
import {
	fontSizeOffsetAtom,
	leadingAtom,
	showNonOriginalTextAtom,
	showRedLettersAtom,
	showVerseDetailsAtom,
	type TFontSizeOffset,
	type TLeading,
	verseBreaksLineAtom,
} from '~/state'

import { Header } from './Header'
import { IncrementInput } from './IncrementInput'
import { PreferencesList } from './PreferencesList'
import { SwitchInput } from './SwitchInput'

const fontSizeOffsetRange = range(-2)(8) as TFontSizeOffset[]

const leadingRange = steppedRange(0.25, 1.5, 2.5) as TLeading[]

export const PreferencesMenu = () => {
	const [fontSizeOffset, setFontSizeOffset] = useAtom(fontSizeOffsetAtom)
	const handleFontSizeOffsetChange = useCallback(
		(value: TFontSizeOffset) => setFontSizeOffset(value),
		[setFontSizeOffset],
	)

	const [leading, setLeading] = useAtom(leadingAtom)
	const handleLeadingChange = useCallback(
		(value: TLeading) => setLeading(value),
		[setLeading],
	)

	return (
		<Portal>
			<Backdrop_OverlayMenu opacity="1/2" />
			<Positioner_OverlayMenu css={{ h: 'content' }}>
				<Container_OverlayMenu
					css={{
						h: 'content',
						maxH: 'calc(100dvh * 2 / 3)',
						pb: 'safe_area_bottom',
						borderTopWidth: '1px',
						borderColor: 'border.emphasized',
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
								range={fontSizeOffsetRange}
								value={fontSizeOffset}
								onChange={handleFontSizeOffsetChange}
								decreaseIcon="text_decrease"
								increaseIcon="text_increase"
							/>
							<IncrementInput
								label="Line spacing"
								range={leadingRange}
								value={leading}
								onChange={handleLeadingChange}
								decreaseIcon="density_small"
								increaseIcon="density_medium"
							/>
							<SwitchInput
								valueAtom={verseBreaksLineAtom}
								label="Start verse on new line"
							/>
							<SwitchInput
								valueAtom={showNonOriginalTextAtom}
								label="Show non-original text"
							/>
							<SwitchInput
								valueAtom={showRedLettersAtom}
								label="Show red letters"
							/>
							<SwitchInput
								valueAtom={showVerseDetailsAtom}
								label="Show references and footnotes"
							/>
						</PreferencesList>
					</div>
				</Container_OverlayMenu>
			</Positioner_OverlayMenu>
		</Portal>
	)
}
