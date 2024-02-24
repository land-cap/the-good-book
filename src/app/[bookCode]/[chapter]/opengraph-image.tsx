import { redirect } from 'next/navigation'

import { type TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import { getBookNameByCode } from '~/organisms/VerseDetailsMenu/getBookNameByCode'

export const size = {
	width: 1200,
	height: 630,
}

export const contentType = 'image/png'

export default async function Image({
	params: { bookCode, chapter },
}: {
	params: TReaderPageParams
}) {
	const bookName = await getBookNameByCode(bookCode)

	redirect(`/og?book-name=${encodeURI(bookName)}&chapter=${chapter}`)
}
