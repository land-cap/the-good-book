import { range } from 'ramda'

import { dbClient } from '~/db/dbClient'

const getChapterData = async (bookCode: string, chapter: number) => {
	const res = await fetch(
		`https://www.bible.com/_next/data/tXhcyy6O6HyMaq7vF4HYA/en/audio-bible/191/${bookCode}.${chapter}.VDC.json?versionId=191&usfm=${bookCode}.${chapter}.VDC`,
		{
			body: null,
			headers: {
				Referer: 'https://www.bible.com/bible/191/EZK.5.VDC',
				'Referrer-Policy': 'strict-origin-when-cross-origin',
				accept: '*/*',
				'accept-language': 'en-US,en;q=0.9,ro;q=0.8',
				cookie:
					'_ga=GA1.1.1601015851.1699509730; yv_iid=AAABNeKH5xc; cookieConsentBannerConfirmed=true; version=191; _ga_9NFX76M6PB=GS1.1.1703878781.11.1.1703880572.0.0.0; last_read=EZK.5',
				newrelic:
					'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjI5NTUzNTMiLCJhcCI6IjYwMTQxOTgzNiIsImlkIjoiODBlMjYxYWY3MzFjOTUxMCIsInRyIjoiNzg0M2M2YThmZmFlNjgzZTQ4NGQ2MWNkODhhZmFjYjAiLCJ0aSI6MTcwMzg4MDU3NTEyNywidGsiOiIyNTg2NzAifX0=',
				purpose: 'prefetch',
				'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120"',
				'sec-ch-ua-mobile': '?0',
				'sec-ch-ua-platform': '"macOS"',
				'sec-fetch-dest': 'empty',
				'sec-fetch-mode': 'cors',
				'sec-fetch-site': 'same-origin',
				traceparent: '00-7843c6a8ffae683e484d61cd88afacb0-80e261af731c9510-01',
				tracestate:
					'258670@nr=0-1-2955353-601419836-80e261af731c9510----1703880575127',
				'x-nextjs-data': '1',
			},
			method: 'GET',
		},
	)

	//eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const data = await res.json()

	//eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	return data.pageProps.chapterInfo.content as string
}

const saveChapterDataToDb = async (
	bookCode: string,
	bookId: number,
	chapter: number,
) => {
	const chapterData = await getChapterData(bookCode, chapter)
	//eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
	await dbClient.chapter.create({
		data: {
			book_id: bookId,
			chapter,
			content: chapterData,
			id: `${bookCode.toLowerCase()} ${chapter}`,
		},
	})
}

const TestPage = () => {
	const migrateChapterDataTable = (async () => {
		//eslint-disable-next-line @typescript-eslint/no-unsafe-call
		const bookList = await dbClient.book.findMany({
			include: { book_name: true },
		})

		bookList.forEach(({ code, id, chapter_count }, bookIndex) => {
			range(1, chapter_count + 1).forEach((chapter) => {
				setTimeout(
					async () => {
						console.log(`Saving ${code}.${chapter} (book_id: ${id}) to db...`)
						await saveChapterDataToDb(code.toUpperCase(), id, chapter)
					},
					bookIndex * chapter * 1000,
				)
			})
		})
	})()

	return (
		<div>
			<h1>Test Page</h1>
		</div>
	)
}

export default TestPage
