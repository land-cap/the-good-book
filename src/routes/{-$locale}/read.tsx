import { createFileRoute, getRouteApi, Outlet } from '@tanstack/react-router'

import { ReaderLayout } from '@/read/shared'
import { getBookList } from '~/db/dbQueries'

const ReaderLayoutWithLoaderData = () => {
   const bookList = getRouteApi('/{-$locale}/read').useLoaderData()

   return (
      <ReaderLayout bookList={bookList}>
         <Outlet></Outlet>
      </ReaderLayout>
   )
}

export const Route = createFileRoute('/{-$locale}/read')({
   loader: () => getBookList(),
   component: ReaderLayoutWithLoaderData,
})
