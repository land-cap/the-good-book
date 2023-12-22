import { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export const ReaderPageContainer = ({ children }: { children: ReactNode }) => (
	<main
		data-component="ReaderPageContainer"
		className={twMerge(
			'grid grid-flow-row grid-cols-[0_1fr_0] sm:grid-cols-[[margin-left-start]_1fr_[margin-left-end_content-start]_minmax(auto,min(calc(75%_-_4rem),calc(42rem_-_4rem)))_[content-end_margin-right-start]_1fr_[margin-right-end]] gap-8',
		)}
	>
		{children}
	</main>
)
