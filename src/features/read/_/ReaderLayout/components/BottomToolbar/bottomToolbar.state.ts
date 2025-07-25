import { atom } from 'jotai'

import { TBookWithDetails } from '~/db/dbQueries'

import { router } from '../../../../../../router'

export const bookListAtom = atom<TBookWithDetails[]>([])

export const bookCodeAtom = atom('')

export const bookAtom = atom((get) => {
   const bookList = get(bookListAtom)
   const currBookCode = get(bookCodeAtom)
   return bookList.find(({ code }) => code === currBookCode)!
})

export const currChapterAtom = atom(undefined as unknown as number)

export const prevChapterLocationAtom = atom((get) => {
   const currChapter = get(currChapterAtom)
   const currBook = get(bookAtom)

   if (currChapter > 1) {
      return router.buildLocation({
         to: '/{-$locale}/read/$book/$chapter',
         params: {
            book: currBook.code,
            chapter: `${currChapter - 1}`,
         },
      })
   }

   const bookList = get(bookListAtom)
   const prevBook = bookList.find(({ order }) => order === currBook.order - 1)

   if (!prevBook) {
      return null
   }

   return router.buildLocation({
      to: '/{-$locale}/read/$book/$chapter',
      params: {
         book: prevBook.code,
         chapter: `${prevBook.chapter_count}`,
      },
   })
})

export const nextChapterLocationAtom = atom((get) => {
   const currChapter = get(currChapterAtom)
   const currBook = get(bookAtom)
   const currBookChapterCount = currBook.chapter_count

   if (currChapter < currBookChapterCount) {
      return router.buildLocation({
         to: '/{-$locale}/read/$book/$chapter',
         params: {
            book: currBook.code,
            chapter: `${currChapter + 1}`,
         },
      })
   }

   const bookList = get(bookListAtom)
   const nextBook = bookList.find(({ order }) => order === currBook.order + 1)

   if (!nextBook) {
      return null
   }

   return router.buildLocation({
      to: '/{-$locale}/read/$book/$chapter',
      params: {
         book: nextBook.code,
         chapter: `${1}`,
      },
   })
})
