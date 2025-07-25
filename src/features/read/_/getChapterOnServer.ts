import { notFound } from '@tanstack/react-router'

import { dbClient } from '~/db/dbClient'

export const getChapterOnServer = async ({
   bookParam,
   chapterParam,
}: {
   bookParam: string
   chapterParam: string
}) => {
   const chapter = parseInt(chapterParam)
   const bookRecord = await dbClient.book.findUnique({
      where: { code: bookParam },
   })
   if (!bookRecord) {
      throw notFound()
   }
   const chapterRecord = await dbClient.chapter.findFirst({
      where: { book_id: bookRecord.book_id, chapter: chapter },
   })
   if (!chapterRecord) {
      throw notFound()
   }
   return { content: chapterRecord.content }
}
