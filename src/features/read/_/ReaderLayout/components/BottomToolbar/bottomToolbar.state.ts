import { linkOptions } from '@tanstack/react-router'
import { atom } from 'jotai'

import type { TBookWithDetails } from '~/db/dbQueries'

export const bookListAtom = atom<TBookWithDetails[]>([])

export const bookCodeAtom = atom('')

export const bookAtom = atom((get) => {
   const bookList = get(bookListAtom)
   const currBookCode = get(bookCodeAtom)
   return bookList.find(({ code }) => code === currBookCode)!
})

export const chapterAtom = atom(undefined as unknown as number)

export const prevChapterLocationAtom = atom((get) => {
   const currChapter = get(chapterAtom)
   const currBook = get(bookAtom)

   if (currChapter > 1) {
      return linkOptions({
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

   return linkOptions({
      to: '/{-$locale}/read/$book/$chapter',
      params: {
         book: prevBook.code,
         chapter: `${prevBook.chapter_count}`,
      },
   })
})

export const nextChapterLocationAtom = atom((get) => {
   const currChapter = get(chapterAtom)
   const currBook = get(bookAtom)
   const currBookChapterCount = currBook.chapter_count

   if (currChapter < currBookChapterCount) {
      return linkOptions({
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

   return linkOptions({
      to: '/{-$locale}/read/$book/$chapter',
      params: {
         book: nextBook.code,
         chapter: `${1}`,
      },
   })
})
