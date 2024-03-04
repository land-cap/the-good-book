'use client'

import { Portal } from '@ark-ui/react'
import { useAtom, useAtomValue } from 'jotai'
import { range } from 'ramda'
import { useCallback } from 'react'
import { Flex, Macrogrid, styled } from 'styled-system/jsx'
import { hstack } from 'styled-system/patterns'

import {
	Backdrop_OverlayMenu,
	Container_OverlayMenu,
	Positioner_OverlayMenu,
} from '~/components'
import { steppedRange } from '~/helpers/steppedRange'
import { SafeAreaBottom } from '~/organisms/BottomToolbar/ChapterPickerMenu/SafeAreaBottom'
import {
	fontSizeOffsetAtom,
	justifyTextAtom,
	leadingAtom,
	showNonOriginalTextAtom,
	showRedLettersAtom,
	showVerseDetailsAtom,
	type TFontSizeOffset,
	type TLeading,
	verseBreaksLineAtom,
} from '~/state'

import { Header } from './Header'
import { IncrementField } from './IncrementField'
import { PreferencesList } from './PreferencesList'
import { SwitchField } from './SwitchField'

const AdjustmenList = styled('ul', {
	base: hstack.raw({
		direction: 'row',
		gap: '2',
		column: 'content',
		mt: '8',
	}),
})

const AdjustmentListItem = styled('li', { base: { flexGrow: '1' } })

const fontSizeOffsetRange = range(-2)(8) as TFontSizeOffset[]

const leadingRange = steppedRange(0.25, 1.25, 3) as TLeading[]

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
							<AdjustmenList>
								<AdjustmentListItem>
									<IncrementField
										range={fontSizeOffsetRange}
										value={fontSizeOffset}
										onChange={handleFontSizeOffsetChange}
										decreaseIcon="text_decrease"
										increaseIcon="text_increase"
									/>
								</AdjustmentListItem>
								<AdjustmentListItem>
									<IncrementField
										range={leadingRange}
										value={leading}
										onChange={handleLeadingChange}
										decreaseIcon="density_small"
										increaseIcon="density_medium"
									/>
								</AdjustmentListItem>
							</AdjustmenList>
							<PreferencesList>
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
