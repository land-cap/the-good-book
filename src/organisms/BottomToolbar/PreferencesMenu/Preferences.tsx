import { useAtom, useAtomValue } from 'jotai/index'
import { range } from 'ramda'
import { useCallback } from 'react'
import { HStack, styled } from 'styled-system/jsx'

import { SafeAreaBottom } from '~/components'
import { steppedRange } from '~/helpers/steppedRange'
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

import { FontField } from './FontField'
import { IncrementField } from './IncrementField'
import { PreferenceFieldList } from './PreferenceFieldList'
import { SwitchField } from './SwitchField'
import { ThemeField } from './ThemeField'

const fontSizeOffsetRange = range(-3)(8) as TFontSizeOffset[]

const leadingRange = steppedRange(0.25, 1.25, 3) as TLeading[]

const IncrementFieldContainer = styled('div', {
	base: {
		flexGrow: '1',
	},
})

export const Preferences = () => {
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
		<>
			<HStack column="content" w="full">
				<IncrementFieldContainer>
					<IncrementField
						range={fontSizeOffsetRange}
						value={fontSizeOffset}
						onChange={handleFontSizeOffsetChange}
						decreaseIcon="&#xeadd;"
						increaseIcon="&#xeae2;"
					/>
				</IncrementFieldContainer>
				<IncrementFieldContainer>
					<IncrementField
						range={leadingRange}
						value={leading}
						onChange={handleLeadingChange}
						decreaseIcon="&#xeba8;"
						increaseIcon="&#xeb9e;"
					/>
				</IncrementFieldContainer>
			</HStack>
			<PreferenceFieldList>
				<FontField />
				<ThemeField />
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
				<SwitchField valueAtom={showRedLettersAtom} label="Show red letters" />
				<SwitchField
					valueAtom={showVerseDetailsAtom}
					label="Show references and footnotes"
				/>
			</PreferenceFieldList>
			<SafeAreaBottom column="content" />
		</>
	)
}
