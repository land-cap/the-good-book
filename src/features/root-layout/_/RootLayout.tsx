import 'jotai-devtools/styles.css'

import { HeadContent, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Provider, useAtomValue } from 'jotai'
import { DevTools as JotaiDevTools } from 'jotai-devtools'
import { type ReactNode, useEffect } from 'react'
import { macrogrid } from 'styled-system/patterns'
import { token } from 'styled-system/tokens'
import { registerSW } from 'virtual:pwa-register'

import { SafeAreaBottom } from '~/ui/shared'

import { LOCALE_LIST } from '../../../config/i18n'
import { GlobalBackdrop } from './GlobalBackdrop'
import { THEME, themeAtom } from './state'

const UseServiceWorkerRegister = () => {
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

const WithProviders = ({ children }: { children: ReactNode }) => (
   <Provider>
      <JotaiDevTools />
      {children}
   </Provider>
)

const RootLayout = ({ children }: { children: ReactNode }) => {
   const theme = useAtomValue(themeAtom)

   const isSepiaTheme = theme === THEME.Sepia

   return (
      // TODO: pass current locale as lang attribute
      // eslint-disable-next-line jsx-a11y/html-has-lang
      <html>
         <head>
            <HeadContent />
            <meta
               name="theme-color"
               media="(prefers-color-scheme: light)"
               content={
                  isSepiaTheme
                     ? token('colors.sepia.50')
                     : token('colors.white')
               }
            />
            <meta
               name="theme-color"
               media="(prefers-color-scheme: dark)"
               content={
                  isSepiaTheme
                     ? token('colors.sepia.950')
                     : token('colors.neutral.800')
               }
            />
         </head>
         <body
            data-theme={theme}
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
   )
}

const RootLayoutWithProviders = ({ children }: { children: ReactNode }) => (
   <WithProviders>
      <RootLayout>{children}</RootLayout>
   </WithProviders>
)

export { RootLayoutWithProviders as RootLayout }
