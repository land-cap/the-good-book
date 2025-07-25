import { createFileRoute, notFound } from '@tanstack/react-router'

import { isOnServer } from '~/utils/shared'

export const Route = createFileRoute('/shell')({
   ssr: false,
   loader: () => {
      if (!isOnServer()) {
         throw notFound({ throw: true })
      }
   },
   component: () => null,
})
