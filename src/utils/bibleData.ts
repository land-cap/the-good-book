import { get, set } from 'idb-keyval'

let bibleData: Record<string, Record<string, { content: string }>> | null = null

const DB_KEY = 'bible-data'

export const getBibleData = async () => {
	if (bibleData) return bibleData

	try {
		bibleData = await get(DB_KEY) || null
		if (bibleData) return bibleData
	} catch {
	}

	const res = await fetch('/bible-data.json')
	bibleData = await res.json()
	try {
		await set(DB_KEY, bibleData)
	} catch {
	}
	return bibleData
}

export const getChapterFromCache = async (book: string, chapter: string) => {
	const data = await getBibleData()
	return data?.[book]?.[chapter] ?? null
}
