import { getRouteApi } from '@tanstack/react-router'
import { useAtom, useSetAtom } from 'jotai'
import { useCallback, useEffect, useRef } from 'react'

import { TBookWithDetails } from '~/db/dbQueries'

import {
   bookListAtom,
   currBookCodeAtom,
   currChapterAtom,
} from './components/BottomToolbar/bottomToolbar.state'

const chapterRouteApi = getRouteApi('/{-$locale}/read/$book/$chapter')

export const useSetUpReaderState = (bookList: TBookWithDetails[]) => {
   const isFirstRender = useRef(true)

   const setBookList = useSetAtom(bookListAtom)

   if (!isFirstRender.current) {
      setBookList(bookList)
   }

   const { book: bookCodeParam, chapter: chapterParam } =
      chapterRouteApi.useParams()

   const [currBookCode, setCurrBookCode] = useAtom(currBookCodeAtom)

   const updateCurrBookCode = useCallback(
      () => setCurrBookCode(bookCodeParam),
      [bookCodeParam, setCurrBookCode],
   )

   if (isFirstRender && currBookCode !== bookCodeParam) {
      updateCurrBookCode()
   }

   useEffect(() => {
      if (!isFirstRender.current) {
         updateCurrBookCode()
      }
   }, [isFirstRender, updateCurrBookCode])

   const [currChapter, setCurrChapter] = useAtom(currChapterAtom)

   const updateCurrChapter = useCallback(
      () => setCurrChapter(Number(chapterParam)),
      [chapterParam, setCurrChapter],
   )

   if (isFirstRender && currChapter !== Number(chapterParam)) {
      updateCurrChapter()
   }

   useEffect(() => {
      if (!isFirstRender) {
         updateCurrChapter()
      }
   }, [chapterParam, isFirstRender, updateCurrChapter])

   isFirstRender.current = false
}
