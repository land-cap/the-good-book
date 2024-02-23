import { ImageResponse } from 'next/og'

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

	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 32,
					background: 'white',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{bookName} {chapter}
			</div>
		),
		{
			...size,
		},
	)
}
