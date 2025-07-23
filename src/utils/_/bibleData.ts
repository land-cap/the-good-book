import { get, set } from 'idb-keyval'

const DB_KEY = 'bible-data'

type BibleData = Record<string, Record<string, { content: string }>>

let cache: BibleData | null = null

const loadFromCache = async (): Promise<BibleData | null> => {
	try {
		return (await get(DB_KEY)) ?? null
	} catch {
		return null
	}
}

const loadFromNetwork = async (): Promise<BibleData> => {
	const res = await fetch('/bible-data.json')
	return await res.json()
}

export const getBibleData = async (): Promise<BibleData> => {
	if (cache) {
		return cache
	}

	const data = (await loadFromCache()) ?? (await loadFromNetwork())
	cache = data
	return data
}

export const getChapterFromCache = async (
	book: string,
	chapter: string,
): Promise<{ content: string } | null> => {
	const data = await getBibleData()
	return data?.[book]?.[chapter] ?? null
}