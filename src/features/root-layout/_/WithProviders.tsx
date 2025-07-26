import { Provider } from 'jotai'
import type { DevToolsProps } from 'jotai-devtools'
import { JSX, ReactNode } from 'react'

let JotaiDevTools: ((props: DevToolsProps) => JSX.Element | null) | null = null

void (async () => {
   if (process.env.NODE_ENV === 'development') {
      void import('jotai-devtools/styles.css')
      const { DevTools } = await import('jotai-devtools')
      JotaiDevTools = DevTools
   }
})()

export const WithProviders = ({ children }: { children: ReactNode }) => (
   <Provider>
      {JotaiDevTools ? <JotaiDevTools /> : null}
      {children}
   </Provider>
)
