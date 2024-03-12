import { useAtom, useAtomValue } from 'jotai/index'
import { range } from 'ramda'
import { useCallback } from 'react'
import { styled } from 'styled-system/jsx'
import { flex } from 'styled-system/patterns'

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
import { SwitchField } from './SwitchField'
import { SwitchFieldList } from './SwitchFieldList'

const fontSizeOffsetRange = range(-3)(8) as TFontSizeOffset[]

const leadingRange = steppedRange(0.25, 1.25, 3) as TLeading[]

const AdjustmentList = styled('ul', {
	base: flex.raw({
		direction: 'row',
		flexWrap: 'wrap',
		columnGap: '2',
		rowGap: '8',
		column: 'content',
		mt: '8',
	}),
})

const AdjustmentListItem = styled('li')

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
			<AdjustmentList>
				<AdjustmentListItem flex="1 1 0">
					<IncrementField
						range={fontSizeOffsetRange}
						value={fontSizeOffset}
						onChange={handleFontSizeOffsetChange}
						decreaseIcon="&#xeadd;"
						increaseIcon="&#xeae2;"
					/>
				</AdjustmentListItem>
				<AdjustmentListItem flex="1 1 0">
					<IncrementField
						range={leadingRange}
						value={leading}
						onChange={handleLeadingChange}
						decreaseIcon="&#xeba8;"
						increaseIcon="&#xeb9e;"
					/>
				</AdjustmentListItem>
				<AdjustmentListItem w="full">
					<FontField />
				</AdjustmentListItem>
			</AdjustmentList>
			<SwitchFieldList>
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
			</SwitchFieldList>
			<SafeAreaBottom column="content" />
		</>
	)
}
