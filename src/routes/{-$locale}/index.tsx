import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/{-$locale}/')({
   loader: () => {
      // eslint-disable-next-line @typescript-eslint/only-throw-error
      throw redirect({
         to: '/{-$locale}/read/$book/$chapter',
         params: {
            book: 'gen',
            chapter: '1',
         },
      })
   },
})
