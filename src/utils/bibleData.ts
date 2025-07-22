let bibleData: Record<string, any> | null = null

export async function getBibleData() {
	if (bibleData) return bibleData
	const res = await fetch('/bible-data.json')
	bibleData = await res.json()
	return bibleData
}

export async function getChapterFromCache(book: string, chapter: string) {
	const data = await getBibleData()
	return data?.[book]?.[chapter] ?? null
}
