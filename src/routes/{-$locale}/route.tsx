import { createFileRoute, Outlet } from '@tanstack/react-router'

import { getMessages } from '@/root-layout/shared'

const LocaleLayout = () => {
   return (
      <div>
         I am locale layout
         <Outlet />
      </div>
   )
}

export const Route = createFileRoute('/{-$locale}')({
   component: LocaleLayout,
   context: async ({ params }) => {
      console.log('params in locale layout context', params)
      const messages = await getMessages({ data: params.locale })
      console.log(messages)
      return { messages }
   },
})
