import { cookies } from 'next/headers'
import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { flex, macrogrid } from 'styled-system/patterns'

import { wChildren } from '~/component-helpers'
import { Separator } from '~/components'

import { PreferencesMenuRoot } from './PreferencesMenu'
import { SetUpPreferencesMenuState } from './SetUpPreferencesMenuState'
import {
	FONT_SIZE_OFFSET_COOKIE,
	HIDE_NON_ORIGINAL_TEXT_COOKIE,
	LEADING_COOKIE,
	SHOW_RED_LETTERS_COOKIE,
	type TFontSizeOffset,
	type TLeading,
	VERSE_BREAKS_LINE_COOKIE,
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

export const TopToolbar = () => {
	const cookieStore = cookies()

	const savedFontSizeOffset = cookieStore.get(FONT_SIZE_OFFSET_COOKIE)?.value
	const savedLeading = cookieStore.get(LEADING_COOKIE)?.value
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
				savedVerseBreaksLine={savedVerseBreaksLine === 'true'}
				savedHideNonOriginalText={savedHideNonOriginalText === 'true'}
				savedShowRedLetters={savedShowRedLetters === 'true'}
			/>
			<Container>
				<Logo>The Good Book</Logo>
				<PreferencesMenuRoot />
			</Container>
		</>
	)
}
