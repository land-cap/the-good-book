import { Provider } from 'jotai'
import { type ReactNode } from 'react'
import { macrogrid } from 'styled-system/patterns'

import { SafeAreaBottom } from '~/ui/shared'

import { GlobalBackdrop } from './GlobalBackdrop'

export const RootLayout = ({ children }: { children: ReactNode }) => {
   return (
      <Provider>
         {/* TODO: pass current locale when i18n is implemented */}
         {/* eslint-disable-next-line jsx-a11y/html-has-lang */}
         <html>
            <head>
               <link
                  rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_back,arrow_drop_down,arrow_forward,close,custom_typography,density_medium,density_small,info,page_info,text_decrease,text_increase,undo"
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
            </body>
         </html>
      </Provider>
   )
}
