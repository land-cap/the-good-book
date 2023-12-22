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
	<span
		data-component="Verse"
		className={twMerge(isStudyMode && 'block relative')}
	>
		{children}
	</span>
)
