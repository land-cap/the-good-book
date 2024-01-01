'use client'

import { Provider } from 'jotai'
import { type ReactNode } from 'react'

export const RootProviders = ({ children }: { children: ReactNode }) => (
	<Provider>{children}</Provider>
)
