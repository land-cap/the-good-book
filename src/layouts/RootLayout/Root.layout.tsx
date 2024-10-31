import { cookies } from 'next/headers'
import { type ReactNode } from 'react'
import { cx } from 'styled-system/css'
import { macrogrid } from 'styled-system/patterns'

import { SafeAreaBottom } from '~/components'
import {
	fontClean,
	fontCondensed,
	fontDyslexic,
	fontMono,
	fontOldStyle,
	fontSans,
} from '~/layouts/RootLayout/fonts'
import { SetUpPersistedState } from '~/organisms'
import {
	ENABLE_NON_ORIGINAL_TEXT_COOKIE,
	ENABLE_RED_LETTERS_COOKIE,
	ENABLE_VERSE_DETAILS_COOKIE,
	enableNonOriginalTextDefaultValue,
	enableRedLettersDefaultValue,
	enableVerseDetailsDefaultValue,
	FONT_COOKIE,
	FONT_SIZE_OFFSET_COOKIE,
	fontDefaultValue,
	fontSizeOffsetDefaultValue,
	JUSTIFY_TEXT_COOKIE,
	justifyTextDefaultValue,
	LEADING_COOKIE,
	leadingDefaultValue,
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

export const RootLayout = ({ children }: { children: ReactNode }) => {
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
	const savedEnableNonOriginalText = cookieStore.get(
		ENABLE_NON_ORIGINAL_TEXT_COOKIE,
	)?.value
	const savedEnableRedLetters = cookieStore.get(ENABLE_RED_LETTERS_COOKIE)
		?.value
	const savedEnableVerseDetailsReferences = cookieStore.get(
		ENABLE_VERSE_DETAILS_COOKIE,
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
				savedEnableNonOriginalText={getBooleanCookieValue(
					savedEnableNonOriginalText,
					enableNonOriginalTextDefaultValue,
				)}
				savedEnableRedLetters={getBooleanCookieValue(
					savedEnableRedLetters,
					enableRedLettersDefaultValue,
				)}
				savedEnableVerseDetailsReferences={getBooleanCookieValue(
					savedEnableVerseDetailsReferences,
					enableVerseDetailsDefaultValue,
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
				<head>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_back,arrow_drop_down,arrow_forward,close,custom_typography,density_medium,density_small,info,page_info,text_decrease,text_increase"
					/>
				</head>
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
					{children}
					<SafeAreaBottom css={{ column: 'content' }} />
					<GlobalBackdrop />
				</body>
			</html>
		</RootProviders>
	)
}
