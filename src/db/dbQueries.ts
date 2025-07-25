import { dbClient } from './dbClient'

export const getBookList = async () =>
   dbClient.book.findMany({
      include: { book_name: true, book_abbreviation: true },
      orderBy: { order: 'asc' },
   })

export type TBookWithDetails = Awaited<ReturnType<typeof getBookList>>[number]
