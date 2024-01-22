import { cookies } from 'next/headers'
import { styled } from 'styled-system/jsx'

import { TopToolbarContainer } from '~/organisms/TopToolbar/TopToolbarContainer'

import { PreferencesMenuRoot } from './PreferencesMenu'
import { SetUpPreferencesMenuState } from './SetUpPreferencesMenuState'
import {
	FONT_SIZE_OFFSET_COOKIE,
	fontSizeOffsetDefaultValue,
	HIDE_NON_ORIGINAL_TEXT_COOKIE,
	hideNonOriginalTextDefaultValue,
	LEADING_COOKIE,
	leadingDefaultValue,
	SHOW_RED_LETTERS_COOKIE,
	showRedLettersDefaultValue,
	type TFontSizeOffset,
	type TLeading,
	VERSE_BREAKS_LINE_COOKIE,
	verseBreaksLineDefaultValue,
} from './TopToolbar.state'

const Logo = styled('span', {
	base: { fontWeight: 'bold' },
})

const getBooleanCookieValue = (
	cookieValue: string | undefined,
	fallback: boolean,
) => (cookieValue ? cookieValue === 'true' : fallback)

export const TopToolbar = () => {
	const cookieStore = cookies()

	const savedFontSizeOffset =
		cookieStore.get(FONT_SIZE_OFFSET_COOKIE)?.value ??
		fontSizeOffsetDefaultValue
	const savedLeading =
		cookieStore.get(LEADING_COOKIE)?.value ?? leadingDefaultValue
	const savedVerseBreaksLine = cookieStore.get(VERSE_BREAKS_LINE_COOKIE)?.value
	const savedHideNonOriginalText = cookieStore.get(
		HIDE_NON_ORIGINAL_TEXT_COOKIE,
	)?.value
	const savedShowRedLetters = cookieStore.get(SHOW_RED_LETTERS_COOKIE)?.value

	return (
		<>
			<SetUpPreferencesMenuState
				savedFontSizeOffset={Number(savedFontSizeOffset) as TFontSizeOffset}
				savedLeading={Number(savedLeading) as TLeading}
				savedVerseBreaksLine={getBooleanCookieValue(
					savedVerseBreaksLine,
					verseBreaksLineDefaultValue,
				)}
				savedHideNonOriginalText={getBooleanCookieValue(
					savedHideNonOriginalText,
					hideNonOriginalTextDefaultValue,
				)}
				savedShowRedLetters={getBooleanCookieValue(
					savedShowRedLetters,
					showRedLettersDefaultValue,
				)}
			/>
			<TopToolbarContainer>
				<Logo>The Good Book</Logo>
				<PreferencesMenuRoot />
			</TopToolbarContainer>
		</>
	)
}
