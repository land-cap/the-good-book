import { notFound } from '@tanstack/react-router'

import { isOnServer } from '~/utils/shared'

export const loadChapterContent = async ({
   book: bookParam,
   chapter: chapterParam,
}: {
   book: string
   chapter: string
}) => {
   if (isOnServer()) {
      const { getChapterOnServer } = await import('./getChapterOnServer')
      return getChapterOnServer({ bookParam, chapterParam })
   } else {
      try {
         const { getChapterOnClient } = await import('./getChapterOnClient')
         return getChapterOnClient(bookParam, chapterParam)
      } catch {
         throw notFound()
      }
   }
}
