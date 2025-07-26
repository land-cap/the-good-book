import { getRouteApi } from '@tanstack/react-router'

const routeApi = getRouteApi('/{-$locale}/read/$book/$chapter')

export const ReaderView = () => {
   const chapterData = routeApi.useLoaderData()

   return <div dangerouslySetInnerHTML={{ __html: chapterData.content }} />
}
