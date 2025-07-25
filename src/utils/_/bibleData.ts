type TBibleData = Record<string, Record<string, { content: string }>>

let bibleData: TBibleData | null = null

const getBibleData = async () => {
   if (bibleData) {
      return bibleData
   }
   const res = await fetch('/bible-data.json')
   bibleData = (await res.json()) as TBibleData
   return bibleData
}

export const getChapterFromCache = async (book: string, chapter: string) => {
   const data = await getBibleData()
   return data?.[book]?.[chapter]
}
