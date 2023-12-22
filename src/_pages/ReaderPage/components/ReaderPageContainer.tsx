import { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export const ReaderPageContainer = ({ children }: { children: ReactNode }) => (
	<main
		data-component="ReaderPageContainer"
		className={twMerge(
			'relative grid grid-flow-row grid-cols-[0_1fr_0] sm:grid-cols-[1fr_minmax(auto,min(calc(75%_-_4rem),calc(42rem_-_4rem)))_1fr] [grid-template-areas:"margin-left_content_margin-right"] gap-8',
		)}
	>
		{children}
	</main>
)
