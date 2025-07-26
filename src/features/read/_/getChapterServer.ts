import { notFound } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

import { dbClient } from '~/db/dbClient'

export const getChapterServer = createServerFn({
   method: 'GET',
   response: 'data',
})
   .validator((data: { bookParam: string; chapterParam: string }) => data)
   .handler(async ({ data: { bookParam, chapterParam } }) => {
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
   })
