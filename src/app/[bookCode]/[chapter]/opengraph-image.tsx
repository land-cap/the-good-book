import { ImageResponse } from 'next/og'
import { type CSSProperties } from 'react'

import { type TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import { getBookNameByCode } from '~/organisms/VerseDetailsMenu/getBookNameByCode'

export const runtime = 'nodejs'

export const size = {
	width: 1200,
	height: 630,
}

export const contentType = 'image/png'

const containerStyles: CSSProperties = {
	background: 'white',
	width: '100%',
	height: '100%',
	display: 'flex',
	flexFlow: 'column nowrap',
	alignItems: 'flex-start',
	justifyContent: 'space-between',
	padding: 64,
}

const titleStyles: CSSProperties = {
	fontSize: 128,
	fontWeight: 600,
	lineHeight: 1,
}

const subTitleStyles: CSSProperties = {
	fontSize: 48,
	fontWeight: 600,
	lineHeight: 1,
}

export default async function Image({
	params: { bookCode, chapter },
}: {
	params: TReaderPageParams
}) {
	const bookName = await getBookNameByCode(bookCode)

	return new ImageResponse(
		(
			<div style={containerStyles}>
				<p style={titleStyles}>
					{bookName} {chapter}
				</p>
				<p style={subTitleStyles}>The Good Book</p>
			</div>
		),
		{
			...size,
		},
	)
}
