import { createFileRoute, getRouteApi, Outlet } from '@tanstack/react-router'

import { ReaderLayout } from '@/read/shared'
import { isOnServer } from '~/utils/shared'

const loadBookList = async () => {
   if (isOnServer()) {
      const { getBookList } = await import('~/db/dbQueries')
      return getBookList()
   } else {
      const { getBookListFromCache } = await import('~/utils/shared')
      return getBookListFromCache()
   }
}

const ReaderLayoutWithLoaderData = () => {
   const bookList = getRouteApi('/{-$locale}/read').useLoaderData()

   return (
      <ReaderLayout bookList={bookList}>
         <Outlet></Outlet>
      </ReaderLayout>
   )
}

export const Route = createFileRoute('/{-$locale}/read')({
   loader: () => loadBookList(),
   component: ReaderLayoutWithLoaderData,
})
