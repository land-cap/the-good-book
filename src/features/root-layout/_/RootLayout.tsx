import 'jotai-devtools/styles.css'

import { HeadContent, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { useAtomValue } from 'jotai'
import { type ReactNode } from 'react'
import { macrogrid } from 'styled-system/patterns'
import { token } from 'styled-system/tokens'

import { SafeAreaBottom } from '~/ui/shared'

import { GlobalBackdrop } from './GlobalBackdrop'
import { THEME, themeAtom } from './state'
import { UseRegisterServiceWorker } from './UseRegisterServiceWorker'
import { WithProviders } from './WithProviders'

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
            <UseRegisterServiceWorker />
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
