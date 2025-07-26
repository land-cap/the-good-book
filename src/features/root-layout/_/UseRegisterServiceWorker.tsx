import { useEffect } from 'react'
import { registerSW } from 'virtual:pwa-register'

import { LOCALE_LIST } from '../../../config/i18n'

export const UseRegisterServiceWorker = () => {
   useEffect(() => {
      void (async () => {
         if ('serviceWorker' in navigator) {
            registerSW({ immediate: true })
            await navigator.serviceWorker.ready
            requestIdleCallback(() => {
               LOCALE_LIST.forEach(
                  (locale) => void fetch(`/api/messages/${locale}`),
               )
               void fetch('/book-list.json')
               void fetch('/chapter-content-data.json')
            })
         }
      })()
   }, [])

   return null
}
