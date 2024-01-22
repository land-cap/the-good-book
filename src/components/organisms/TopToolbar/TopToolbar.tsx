import { cookies } from 'next/headers'
import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { flex, macrogrid } from 'styled-system/patterns'

import { wChildren } from '~/component-helpers'

import { Separator } from '../../Separator'
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

const Container = wChildren(({ children }) => (
	<header
		className={macrogrid({
			column: 'fullbleed',
			zIndex: '1',
			position: 'sticky',
			top: '0',
			bg: 'bg.canvas',
			transition: 'colors',
			transitionDuration: 'fast',
			transitionTimingFunction: 'ease-out',
		})}
	>
		<nav
			className={flex({
				align: 'center',
				column: 'content',
				direction: 'row',
				gap: '6',
				h: '14',
				justify: 'space-between',
			})}
		>
			{children}
		</nav>
		<Separator className={css({ column: 'content' })} />
	</header>
))

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
			<Container>
				<Logo>The Good Book</Logo>
				<PreferencesMenuRoot />
			</Container>
		</>
	)
}
