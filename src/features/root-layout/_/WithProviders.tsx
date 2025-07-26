import { Provider } from 'jotai'
import { ReactNode } from 'react'

export const WithProviders = ({ children }: { children: ReactNode }) => (
   <Provider>{children}</Provider>
)
