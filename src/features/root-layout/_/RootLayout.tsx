import { HeadContent, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Provider, useAtomValue } from 'jotai'
import { type ReactNode, useEffect } from 'react'
import { macrogrid } from 'styled-system/patterns'
import { token } from 'styled-system/tokens'
import { IntlProvider } from 'use-intl'
import { registerSW } from 'virtual:pwa-register'

import { SafeAreaBottom } from '~/ui/shared'

import { GlobalBackdrop } from './GlobalBackdrop'
import { THEME, themeAtom } from './state'

// You can get the messages from anywhere you like. You can also
// fetch them from within a component and then render the provider
// along with your app once you have the messages.
const messages = {
   App: {
      hello: 'Hello {firstName}!',
   },
}

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

const WithProviders = ({ children }: { children: ReactNode }) => (
   <Provider>
      <IntlProvider messages={messages} locale="en">
         {children}
      </IntlProvider>
   </Provider>
)

const RootLayout = ({ children }: { children: ReactNode }) => {
   const theme = useAtomValue(themeAtom)

   const isSepiaTheme = theme === THEME.Sepia

   return (
      <html lang={'en'}>
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
