import { createFileRoute, getRouteApi, Outlet } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

import { ReaderLayout } from '@/read/shared'
import { getBookList } from '~/db/dbQueries'

const getBookListRpc = createServerFn().handler(async () => getBookList())

const ReaderLayoutWithLoaderData = () => {
   const bookList = getRouteApi('/{-$locale}/read').useLoaderData()

   return (
      <ReaderLayout bookList={bookList}>
         <Outlet></Outlet>
      </ReaderLayout>
   )
}

export const Route = createFileRoute('/{-$locale}/read')({
   loader: () => getBookListRpc(),
   component: ReaderLayoutWithLoaderData,
})
