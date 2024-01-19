import { cookies } from 'next/headers'

import {
	FONT_SIZE_OFFSET_COOKIE,
	HIDE_NON_ORIGINAL_TEXT_COOKIE,
	LEADING_COOKIE,
	SHOW_RED_LETTERS_COOKIE,
	type TFontSizeOffset,
	type TLeading,
	VERSE_BREAKS_LINE_COOKIE,
} from '~/app/@topToolbar/_components/TopToolbar/TopToolbar.state'
import { getChapterWithCache } from '~/db'

import { ChapterContentContainer, renderChapterContent } from './chapterContent'
import { HydrateReaderPageAtoms } from './HydrateReaderPageAtoms'
import { type TReaderPageParams } from './ReaderPage.types'

export const ReaderPage = async ({ params }: { params: TReaderPageParams }) => {
	const { bookCode, chapter } = params

	const cookieStore = cookies()

	const savedFontSizeOffset = cookieStore.get(FONT_SIZE_OFFSET_COOKIE)?.value
	const savedLeading = cookieStore.get(LEADING_COOKIE)?.value
	const savedVerseBreaksLine = cookieStore.get(VERSE_BREAKS_LINE_COOKIE)?.value
	const savedHideNonOriginalText = cookieStore.get(
		HIDE_NON_ORIGINAL_TEXT_COOKIE,
	)?.value
	const savedShowRedLetters = cookieStore.get(SHOW_RED_LETTERS_COOKIE)?.value

	const chapterData = await getChapterWithCache(bookCode, Number(chapter))

	if (!chapterData?.content) {
		throw new Error('No chapter data')
	}

	const chapterContent = renderChapterContent(chapterData.content)

	return (
		<>
			<HydrateReaderPageAtoms
				savedFontSizeOffset={Number(savedFontSizeOffset) as TFontSizeOffset}
				savedLeading={Number(savedLeading) as TLeading}
				savedVerseBreaksLine={savedVerseBreaksLine === 'true'}
				savedHideNonOriginalText={savedHideNonOriginalText === 'true'}
				savedShowRedLetters={savedShowRedLetters === 'true'}
			/>
			<ChapterContentContainer>{chapterContent}</ChapterContentContainer>
		</>
	)
}
