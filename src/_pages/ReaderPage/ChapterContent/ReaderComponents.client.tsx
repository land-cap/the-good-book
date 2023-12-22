'use client'

import { useAtom } from 'jotai'
import { type ReactNode, useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { verseToQuoteInFocusListState } from './chapterContent.state'

export const Verse = ({
	children,
	isStudyMode,
	verseOrder,
	initialIsFocused,
}: {
	children: ReactNode
	isStudyMode: boolean
	verseOrder: number
	initialIsFocused?: boolean
}) => {
	const [isFocused, setIsFocused] = useState(useRef(initialIsFocused).current)

	const parentQuoteElRef = useRef<HTMLSpanElement | null>(null)

	const [quoteInFocusList, setQuoteInFocusList] = useAtom(
		verseToQuoteInFocusListState,
	)

	useEffect(() => {
		setIsFocused(quoteInFocusList.has(verseOrder))
	}, [quoteInFocusList, verseOrder])

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
				if (parentQuoteElRef.current) {
					setQuoteInFocusList((prev) => {
						if (prev.has(verseOrder)) {
							prev.delete(verseOrder)
							return new Map(prev)
						}
						return new Map(prev).set(
							verseOrder,
							parentQuoteElRef.current as unknown as HTMLSpanElement,
						)
					})
				}
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
