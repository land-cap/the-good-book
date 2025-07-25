import { usePrevious } from '@mantine/hooks'
import { getRouteApi } from '@tanstack/react-router'
import { useSetAtom } from 'jotai'
import { useHydrateAtoms } from 'jotai/react/utils'
import { ReactNode, useEffect } from 'react'

import type { TBookWithDetails } from '~/db/dbQueries'

import { BottomToolbar } from './components/BottomToolbar/BottomToolbar'
import {
   bookCodeAtom,
   bookListAtom,
   currChapterAtom,
} from './components/BottomToolbar/bottomToolbar.state'
import { Footer } from './components/Footer/Footer'

const chapterRouteApi = getRouteApi('/{-$locale}/read/$book/$chapter')

export const ReaderLayout = ({
   children,
   bookList,
}: {
   children: ReactNode
   bookList: TBookWithDetails[]
}) => {
   const { book: bookCodeParam, chapter: chapterParam } =
      chapterRouteApi.useParams()

   useHydrateAtoms([
      [bookListAtom, bookList],
      [bookCodeAtom, bookCodeParam],
      [currChapterAtom, parseInt(chapterParam)],
   ])

   const prevBookCodeParam = usePrevious(bookCodeParam)
   const prevChapterParam = usePrevious(chapterParam)

   const setBookCode = useSetAtom(bookCodeAtom)
   const setChapter = useSetAtom(currChapterAtom)

   useEffect(() => {
      if (prevBookCodeParam && bookCodeParam !== prevBookCodeParam) {
         setBookCode(bookCodeParam)
      }
   }, [bookCodeParam, prevBookCodeParam, setBookCode])

   useEffect(() => {
      if (prevChapterParam && chapterParam !== prevChapterParam) {
         setChapter(parseInt(chapterParam))
      }
   }, [chapterParam, prevChapterParam, setChapter])

   return (
      <>
         {/*<TopToolbar />*/}
         {children}
         <BottomToolbar />
         {/*<VerseDetailsMenuRoot bookList={bookList} />*/}
         <Footer />
      </>
   )
}
