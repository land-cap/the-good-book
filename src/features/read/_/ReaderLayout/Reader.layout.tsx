import type { ReactNode } from 'react'

import { TBookWithDetails } from '~/db/dbQueries'

import { BottomToolbar } from './components/BottomToolbar/BottomToolbar'
import { Footer } from './components/Footer/Footer'
import { useSetUpReaderState } from './UseSetUpReaderState'

export const ReaderLayout = ({
   children,
   bookList,
}: {
   children: ReactNode
   bookList: TBookWithDetails[]
}) => {
   useSetUpReaderState(bookList)

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
