import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/{-$locale}/')({
   loader: () => {
      throw redirect({
         to: '/{-$locale}/read/$book/$chapter',
         params: {
            book: 'gen',
            chapter: '1',
         },
      })
   },
})
