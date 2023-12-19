'use client'

import { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export const Verse = ({
	children,
	isStudyMode,
}: {
	children: ReactNode
	isStudyMode: boolean
	verseOrder: number
	initialIsFocused?: boolean
}) => (
	<span className={twMerge('rc-verse', isStudyMode && 'block relative')}>
		<span
			className={twMerge(
				'border-b-2 border-b-transparent transition duration-quick ease-in-out',
			)}
		>
			{children}
		</span>
	</span>
)
