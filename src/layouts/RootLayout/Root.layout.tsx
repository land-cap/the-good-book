import { cookies } from 'next/headers'
import { type ReactNode } from 'react'
import { cx } from 'styled-system/css'
import { macrogrid } from 'styled-system/patterns'

import { SafeAreaBottom } from '~/components'
import { getBookListWithCache } from '~/db'
import {
	fontClean,
	fontCondensed,
	fontDyslexic,
	fontMono,
	fontOldStyle,
	fontSans,
} from '~/layouts/RootLayout/fonts'
import {
	BottomToolbar,
	SetUpPersistedState,
	TopToolbar,
	VerseDetailsMenuRoot,
} from '~/organisms'
import {
	FONT_COOKIE,
	FONT_SIZE_OFFSET_COOKIE,
	fontDefaultValue,
	fontSizeOffsetDefaultValue,
	JUSTIFY_TEXT_COOKIE,
	justifyTextDefaultValue,
	LEADING_COOKIE,
	leadingDefaultValue,
	SHOW_NON_ORIGINAL_TEXT_COOKIE,
	SHOW_RED_LETTERS_COOKIE,
	SHOW_VERSE_DETAILS_COOKIE,
	showNonOriginalTextDefaultValue,
	showRedLettersDefaultValue,
	showVerseDetailsDefaultValue,
	type TFont,
	type TFontSizeOffset,
	type THEME,
	THEME_COOKIE,
	themeDefaultValue,
	type TLeading,
	VERSE_BREAKS_LINE_COOKIE,
	verseBreaksLineDefaultValue,
} from '~/state'

import { GlobalBackdrop } from './GlobalBackdrop'
import { RootProviders } from './RootProviders'
import { UseLockBodyScroll } from './UseLockBodyScroll'

const getBooleanCookieValue = (
	cookieValue: string | undefined,
	fallback: boolean,
) => (cookieValue ? cookieValue === 'true' : fallback)

export const RootLayout = async ({ children }: { children: ReactNode }) => {
	const bookList = await getBookListWithCache()

	const cookieStore = cookies()

	const savedTheme = cookieStore.get(THEME_COOKIE)?.value ?? themeDefaultValue
	const savedFontSizeOffset =
		cookieStore.get(FONT_SIZE_OFFSET_COOKIE)?.value ??
		fontSizeOffsetDefaultValue
	const savedLeading =
		cookieStore.get(LEADING_COOKIE)?.value ?? leadingDefaultValue
	const savedFont = cookieStore.get(FONT_COOKIE)?.value ?? fontDefaultValue
	const savedVerseBreaksLine = cookieStore.get(VERSE_BREAKS_LINE_COOKIE)?.value
	const savedJustifyText = cookieStore.get(JUSTIFY_TEXT_COOKIE)?.value
	const savedShowNonOriginalText = cookieStore.get(
		SHOW_NON_ORIGINAL_TEXT_COOKIE,
	)?.value
	const savedShowRedLetters = cookieStore.get(SHOW_RED_LETTERS_COOKIE)?.value
	const savedShowVerseDetailsReferences = cookieStore.get(
		SHOW_VERSE_DETAILS_COOKIE,
	)?.value

	return (
		<RootProviders>
			<SetUpPersistedState
				savedTheme={savedTheme as THEME}
				savedFontSizeOffset={Number(savedFontSizeOffset) as TFontSizeOffset}
				savedLeading={Number(savedLeading) as TLeading}
				savedFont={savedFont as TFont}
				savedVerseBreaksLine={getBooleanCookieValue(
					savedVerseBreaksLine,
					verseBreaksLineDefaultValue,
				)}
				savedJustifyText={getBooleanCookieValue(
					savedJustifyText,
					justifyTextDefaultValue,
				)}
				savedShowNonOriginalText={getBooleanCookieValue(
					savedShowNonOriginalText,
					showNonOriginalTextDefaultValue,
				)}
				savedShowRedLetters={getBooleanCookieValue(
					savedShowRedLetters,
					showRedLettersDefaultValue,
				)}
				savedShowVerseDetailsReferences={getBooleanCookieValue(
					savedShowVerseDetailsReferences,
					showVerseDetailsDefaultValue,
				)}
			/>
			<UseLockBodyScroll />
			<html
				lang="en"
				className={cx(
					fontSans.variable,
					fontMono.variable,
					fontCondensed.variable,
					fontDyslexic.variable,
					fontOldStyle.variable,
					fontClean.variable,
				)}
			>
				<body
					data-theme={savedTheme}
					className={macrogrid({
						gridTemplateRows: 'min-content 1fr min-content',
						minH: '100dvh',
						overscrollBehavior: 'contain',
						pb: '14',
						fontSize: 'sm',
						color: 'fg',
						background: 'bg.canvas',
						sm: { fontSize: 'md' },
					})}
				>
					<TopToolbar />
					{children}
					<SafeAreaBottom css={{ column: 'content' }} />
					<GlobalBackdrop />
					<BottomToolbar bookList={bookList} />
					<VerseDetailsMenuRoot bookList={bookList} />
				</body>
			</html>
		</RootProviders>
	)
}
