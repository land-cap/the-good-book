import { cookies } from 'next/headers'

import {
	FONT_SIZE_OFFSET_COOKIE,
	type TFontSizeOffset,
} from '~/app/[bookCode]/_components/TopToolbar/TopToolbar.state'
import { getChapterWithCache } from '~/db'

import { ChapterContentContainer, renderChapterContent } from './chapterContent'
import { HydrateReaderPageAtoms } from './HydrateReaderPageAtoms'
import { type TReaderPageParams } from './ReaderPage.types'

export const ReaderPage = async ({ params }: { params: TReaderPageParams }) => {
	const { bookCode, chapter } = params

	const cookieStore = cookies()
	const fontSizeOffset = cookieStore.get(FONT_SIZE_OFFSET_COOKIE)

	console.log(FONT_SIZE_OFFSET_COOKIE, fontSizeOffset)

	const chapterData = await getChapterWithCache(bookCode, Number(chapter))

	if (!chapterData?.content) {
		throw new Error('No chapter data')
	}

	const chapterContent = renderChapterContent(chapterData.content)

	return (
		<>
			<HydrateReaderPageAtoms
				savedFontSizeOffset={Number(fontSizeOffset?.value) as TFontSizeOffset}
			/>
			<ChapterContentContainer>{chapterContent}</ChapterContentContainer>
		</>
	)
}
