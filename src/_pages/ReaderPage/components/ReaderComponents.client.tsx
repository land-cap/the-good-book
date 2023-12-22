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

	const parentQuoteElRef = useRef<HTMLSpanElement | null>(null)

	return (
		<span
			ref={(el) => {
				if (el && el?.parentElement?.classList?.contains('rc-quote')) {
					parentQuoteElRef.current = el.parentElement
				}
			}}
			className={twMerge(
				'rc-verse',
				isStudyMode && 'block relative select-none cursor-pointer',
			)}
			onClick={() => {
				console.log(parentQuoteElRef.current)
				setIsFocused((prev) => !prev)
			}}
		>
			<span
				className={twMerge(
					'border-b-2 border-b-transparent transition duration-quick ease-in-out',
					isFocused && 'border-b-borderEmphasized',
				)}
			>
				{children}
			</span>
		</span>
	)
}
