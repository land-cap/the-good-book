import { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { pageCls } from '~/components'

export const ReaderPageContainer = ({ children }: { children: ReactNode }) => (
	<main className={twMerge(pageCls)}>{children}</main>
)
