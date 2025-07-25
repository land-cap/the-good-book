import { createFileRoute, notFound } from '@tanstack/react-router'

import { ReaderView } from '@/read/shared'
import { isOnServer } from '~/utils/shared'

const loadChapterContent = async ({
   book: bookParam,
   chapter: chapterParam,
}: {
   book: string
   chapter: string
}) => {
   if (isOnServer()) {
      const { dbClient } = await import('~/db/dbClient')
      const chapter = parseInt(chapterParam)
      const book = await dbClient.book.findUnique({
         where: { code: bookParam },
      })
      if (!book) {
         throw notFound()
      }
      const chapterRecord = await dbClient.chapter.findFirst({
         where: { book_id: book.book_id, chapter: chapter },
      })
      if (!chapterRecord) {
         throw notFound()
      }
      return { content: chapterRecord.content }
   } else {
      try {
         const { getChapterFromCache } = await import('~/utils/shared')
         return getChapterFromCache(bookParam, chapterParam)
      } catch {
         throw notFound()
      }
   }
}

export const Route = createFileRoute('/{-$locale}/read/$book/$chapter')({
   component: ReaderView,
   loader: async ({ params }) => loadChapterContent(params),
})
