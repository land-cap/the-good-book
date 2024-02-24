import { ImageResponse } from 'next/og'
import { type NextRequest } from 'next/server'
import { type CSSProperties } from 'react'

export const runtime = 'edge'

const containerStyles: CSSProperties = {
	background: '#fef08a',
	width: '100%',
	height: '100%',
	display: 'flex',
	flexFlow: 'column nowrap',
	alignItems: 'flex-start',
	justifyContent: 'space-between',
	padding: 80,
}

const titleStyles: CSSProperties = {
	fontFamily: 'sans-bold',
	fontSize: 128,
	fontWeight: 600,
	lineHeight: 1.1,
}

const subTitleStyles: CSSProperties = {
	fontFamily: 'sans-bold',
	fontSize: 48,
	fontWeight: 600,
	lineHeight: 1.1,
}

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url)
	const bookName = searchParams.get('book-name')
	const chapter = searchParams.get('chapter')
	const verseRange = searchParams.get('verse-range')

	const fontSansLightData = await fetch(
		new URL('../../../assets/fonts/Geist-UltraLight.otf', import.meta.url),
	).then((res) => res.arrayBuffer())

	const fontSansBoldData = await fetch(
		new URL('../../../assets/fonts/Geist-Black.otf', import.meta.url),
	).then((res) => res.arrayBuffer())

	return new ImageResponse(
		bookName ? (
			<div style={containerStyles}>
				<p style={titleStyles}>
					{bookName} {chapter}
				</p>
				<p style={subTitleStyles}>The Good Book</p>
			</div>
		) : (
			<div
				style={{
					background: 'white',
					width: '100%',
					height: '100%',
					display: 'flex',
					flexFlow: 'column nowrap',
					alignItems: 'center',
					justifyContent: 'center',
					padding: 96,
				}}
			>
				<p
					style={{
						fontFamily: 'sans-bold',
						fontSize: 96,
						fontWeight: 600,
						lineHeight: 1.1,
					}}
				>
					The Good Book
				</p>
			</div>
		),
		{
			width: 1200,
			height: 630,
			fonts: [
				{
					name: 'sans-light',
					data: fontSansLightData,
					style: 'normal',
				},
				{
					name: 'sans-bold',
					data: fontSansBoldData,
					style: 'normal',
				},
			],
		},
	)
}
