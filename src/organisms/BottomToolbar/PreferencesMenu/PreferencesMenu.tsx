'use client'

import { Portal } from '@ark-ui/react'
import { useAtom, useAtomValue } from 'jotai'
import { range } from 'ramda'
import { useCallback } from 'react'
import { Flex, Macrogrid } from 'styled-system/jsx'

import {
	Backdrop_OverlayMenu,
	Container_OverlayMenu,
	Positioner_OverlayMenu,
} from '~/components'
import { steppedRange } from '~/helpers/steppedRange'
import { SafeAreaBottom } from '~/organisms/BottomToolbar/ChapterPickerMenu/SafeAreaBottom'
import { type TSelectOption } from '~/organisms/BottomToolbar/PreferencesMenu/SelectField'
import {
	fontAtom,
	fontDefaultValue,
	fontSizeOffsetAtom,
	justifyTextAtom,
	leadingAtom,
	showNonOriginalTextAtom,
	showRedLettersAtom,
	showVerseDetailsAtom,
	type TFont,
	type TFontSizeOffset,
	type TLeading,
	verseBreaksLineAtom,
} from '~/state'

import { Header } from './Header'
import { IncrementField } from './IncrementField'
import { PreferencesList } from './PreferencesList'
import { SelectField } from './SelectField'
import { SwitchField } from './SwitchField'

const fontSizeOffsetRange = range(-2)(8) as TFontSizeOffset[]

const leadingRange = steppedRange(0.25, 1.25, 3) as TLeading[]

const fontOptionList: TSelectOption[] = [
	{ value: 'sans', label: 'Sans-serif' },
	{ value: 'serif', label: 'Serif' },
	{ value: 'soft', label: 'Soft' },
	{ value: 'dyslexic', label: 'Dyslexic' },
]

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

	const [font, setFont] = useAtom(fontAtom)

	const verseBreaksLine = useAtomValue(verseBreaksLineAtom)

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
						borderColor: 'border',
					}}
				>
					<Flex direction="column" h="fit-content" maxH="calc(100dvh * 2 / 3)">
						<Header />
						<Macrogrid
							overflow="auto"
							overscrollBehavior="contain"
							h="fit-content"
						>
							<PreferencesList>
								<IncrementField
									label="Text size"
									range={fontSizeOffsetRange}
									value={fontSizeOffset}
									onChange={handleFontSizeOffsetChange}
									decreaseIcon="text_decrease"
									increaseIcon="text_increase"
								/>
								<IncrementField
									label="Line spacing"
									range={leadingRange}
									value={leading}
									onChange={handleLeadingChange}
									decreaseIcon="density_small"
									increaseIcon="density_medium"
								/>
								<SelectField
									label="Font"
									itemList={fontOptionList}
									value={[font]}
									onValueChange={(value) => {
										setFont(
											value.length && value[0]
												? (value[0] as TFont)
												: fontDefaultValue,
										)
									}}
								/>
								<SwitchField
									valueAtom={verseBreaksLineAtom}
									label="Start verse on new line"
								/>
								<SwitchField
									valueAtom={justifyTextAtom}
									label="Justify text"
									disabled={verseBreaksLine}
								/>
								<SwitchField
									valueAtom={showNonOriginalTextAtom}
									label="Show non-original text"
								/>
								<SwitchField
									valueAtom={showRedLettersAtom}
									label="Show red letters"
								/>
								<SwitchField
									valueAtom={showVerseDetailsAtom}
									label="Show references and footnotes"
								/>
							</PreferencesList>
							<SafeAreaBottom column="content" />
						</Macrogrid>
					</Flex>
				</Container_OverlayMenu>
			</Positioner_OverlayMenu>
		</Portal>
	)
}
