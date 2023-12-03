import { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { pageCls } from '~/components'

export const ReaderPageContainer = ({
	children,
	isStudyMode,
}: {
	children: ReactNode
	isStudyMode: boolean
}) => (
	<main className={twMerge(pageCls, isStudyMode && 'px-10 sm:px-0')}>
		{children}
	</main>
)
