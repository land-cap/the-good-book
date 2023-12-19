'use client'

import { type ReactNode, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export const Verse = ({
	children,
	isStudyMode,
	initialIsFocused,
}: {
	children: ReactNode
	isStudyMode: boolean
	initialIsFocused?: boolean
}) => {
	const [isFocused, setIsFocused] = useState(useRef(initialIsFocused).current)

	return (
		<span
			className={twMerge(
				'rc-verse',
				isStudyMode && 'block relative select-none cursor-pointer',
			)}
			onClick={() => setIsFocused((prev) => !prev)}
		>
			<span
				className={twMerge(
					'border-b-2 border-b-transparent transition duration-quick ease-out',
					isFocused && 'border-b-borderEmphasized',
				)}
			>
				{children}
			</span>
		</span>
	)
}
