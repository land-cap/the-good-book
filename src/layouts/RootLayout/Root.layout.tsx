import localFont from 'next/font/local'
import { cookies } from 'next/headers'
import { type ReactNode } from 'react'
import { cx } from 'styled-system/css'
import { macrogrid } from 'styled-system/patterns'

import { getBookListWithCache } from '~/db'
import {
	BottomToolbar,
	SetUpPreferencesMenuState,
	TopToolbar,
} from '~/organisms'
import {
	FONT_SIZE_OFFSET_COOKIE,
	fontSizeOffsetDefaultValue,
	LEADING_COOKIE,
	leadingDefaultValue,
	SHOW_NON_ORIGINAL_TEXT_COOKIE,
	SHOW_RED_LETTERS_COOKIE,
	SHOW_VERSE_DETAILS_COOKIE,
	showNonOriginalTextDefaultValue,
	showRedLettersDefaultValue,
	showVerseDetailsDefaultValue,
	type TFontSizeOffset,
	type TLeading,
	VERSE_BREAKS_LINE_COOKIE,
	verseBreaksLineDefaultValue,
} from '~/state'

import { RootProviders } from './RootProviders'
import { UseLockBodyScroll } from './UseLockBodyScroll'

const fontGeist = localFont({
	src: [
		{ path: './fonts/Geist-Regular.woff2', weight: '400' },
		{
			path: './fonts/Geist-Regular.otf',
			weight: '400',
		},
		{ path: './fonts/Geist-Bold.woff2', weight: '700' },
		{ path: './fonts/Geist-Bold.otf', weight: '700' },
	],
	variable: '--font-sans',
})

const fontGeistMono = localFont({
	src: [
		{ path: './fonts/GeistMono-Regular.woff2', weight: '400' },
		{
			path: './fonts/GeistMono-Regular.otf',
			weight: '400',
		},
		{ path: './fonts/GeistMono-Bold.woff2', weight: '700' },
		{ path: './fonts/GeistMono-Bold.otf', weight: '700' },
	],
	variable: '--font-mono',
})

const getBooleanCookieValue = (
	cookieValue: string | undefined,
	fallback: boolean,
) => (cookieValue ? cookieValue === 'true' : fallback)

export const RootLayout = async ({ children }: { children: ReactNode }) => {
	const bookList = await getBookListWithCache()

	const cookieStore = cookies()

	const savedFontSizeOffset =
		cookieStore.get(FONT_SIZE_OFFSET_COOKIE)?.value ??
		fontSizeOffsetDefaultValue
	const savedLeading =
		cookieStore.get(LEADING_COOKIE)?.value ?? leadingDefaultValue
	const savedVerseBreaksLine = cookieStore.get(VERSE_BREAKS_LINE_COOKIE)?.value
	const savedShowNonOriginalText = cookieStore.get(
		SHOW_NON_ORIGINAL_TEXT_COOKIE,
	)?.value
	const savedShowRedLetters = cookieStore.get(SHOW_RED_LETTERS_COOKIE)?.value
	const savedShowVerseDetailsReferences = cookieStore.get(
		SHOW_VERSE_DETAILS_COOKIE,
	)?.value

	return (
		<RootProviders>
			<SetUpPreferencesMenuState
				savedFontSizeOffset={Number(savedFontSizeOffset) as TFontSizeOffset}
				savedLeading={Number(savedLeading) as TLeading}
				savedVerseBreaksLine={getBooleanCookieValue(
					savedVerseBreaksLine,
					verseBreaksLineDefaultValue,
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
				className={cx(fontGeist.variable, fontGeistMono.variable)}
			>
				<body
					className={macrogrid({
						gridTemplateRows: 'min-content 1fr min-content',
						minH: '100dvh',
						overscrollBehavior: 'contain',
						fontSize: 'sm',
						color: 'fg',
						background: 'bg.canvas',
						sm: { fontSize: 'md' },
						_osDark: { color: 'fg.muted' },
					})}
				>
					<TopToolbar />
					{children}
					<BottomToolbar bookList={bookList} />
				</body>
			</html>
		</RootProviders>
	)
}
