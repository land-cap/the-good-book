import type { TBookWithDetails } from '~/db/dbQueries'

let bookList: TBookWithDetails[] | null = null

const getBibleData = async () => {
   if (bookList) {
      return bookList
   }
   const res = await fetch('/book-list.json')
   bookList = (await res.json()) as TBookWithDetails[]
   return bookList
}

export const getBookListFromCache = () => getBibleData()
