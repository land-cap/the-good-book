import { HeadContent, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Provider } from 'jotai'
import { type ReactNode, useEffect } from 'react'
import { macrogrid } from 'styled-system/patterns'
import { token } from 'styled-system/tokens'
import { registerSW } from 'virtual:pwa-register'

import { SafeAreaBottom } from '~/ui/shared'

import { GlobalBackdrop } from './GlobalBackdrop'

const UseServiceWorkerRegister = () => {
   useEffect(() => {
      void (async () => {
         if ('serviceWorker' in navigator) {
            registerSW({ immediate: true })
            await navigator.serviceWorker.ready
            import('~/utils/shared')
               .then((mod) => mod.getBibleData())
               .catch((error) => {
                  console.error('Service worker registration failed:', error)
               })
         }
      })()
   }, [])

   return null
}

export const RootLayout = ({ children }: { children: ReactNode }) => {
   return (
      <Provider>
         {/* TODO: pass current locale when i18n is implemented */}
         {/* eslint-disable-next-line jsx-a11y/html-has-lang */}
         <html>
            <head>
               <HeadContent />
               <meta
                  name="theme-color"
                  media="(prefers-color-scheme: light)"
                  content={token('colors.white')}
               />
               <meta
                  name="theme-color"
                  media="(prefers-color-scheme: dark)"
                  content={token('colors.neutral.800')}
               />
            </head>
            <body
               // TODO: set current theme
               // data-theme={savedTheme}
               className={macrogrid({
                  gridTemplateRows: 'min-content 1fr min-content',
                  minH: '100dvh',
                  overscrollBehavior: 'contain',
                  pb: '14',
                  fontSize: 'sm',
                  color: 'fg',
                  background: 'bg.canvas',
                  sm: { fontSize: 'md' },
               })}
            >
               {children}
               <SafeAreaBottom css={{ column: 'content' }} />
               <GlobalBackdrop />
               <UseServiceWorkerRegister />
               <TanStackRouterDevtools position="bottom-right" />
               <Scripts />
            </body>
         </html>
      </Provider>
   )
}
