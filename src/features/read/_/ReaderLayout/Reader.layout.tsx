import { getRouteApi } from '@tanstack/react-router'
import { useHydrateAtoms } from 'jotai/react/utils'
import type { ReactNode } from 'react'

import { TBookWithDetails } from '~/db/dbQueries'

import { BottomToolbar } from './components/BottomToolbar/BottomToolbar'
import {
   bookListAtom,
   currBookCodeAtom,
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
      [currBookCodeAtom, bookCodeParam],
      [currChapterAtom, parseInt(chapterParam)],
   ])

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
