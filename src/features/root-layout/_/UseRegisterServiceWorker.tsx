import { useEffect } from 'react'
import { registerSW } from 'virtual:pwa-register'

export const UseRegisterServiceWorker = () => {
   useEffect(() => {
      void (async () => {
         if ('serviceWorker' in navigator) {
            registerSW({ immediate: true })
            await navigator.serviceWorker.ready
            requestIdleCallback(() => {
               void fetch('/book-list.json')
               void fetch('/chapter-content-data.json')
            })
         }
      })()
   }, [])

   return null
}
