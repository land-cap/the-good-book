'use client'

import { useSearchParams } from 'next/navigation'
import { type ReactNode, useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export const Verse = ({
	children,
	isStudyMode,
	verseId,
	initialIsFocused,
}: {
	children: ReactNode
	isStudyMode: boolean
	verseId: `${string}.${number}.${number}`
	initialIsFocused?: boolean
}) => {
	const [isFocused, setIsFocused] = useState(useRef(initialIsFocused).current)

	const verseOrder = parseInt(verseId.split('.')[2]!)

	const searchParams = useSearchParams()
	const verseStart = parseInt(searchParams.get('verse-start')!)
	const verseEnd = parseInt(searchParams.get('verse-end')!)

	useEffect(() => {
		const isIncludedInPassage =
			verseOrder >= verseStart && verseOrder <= verseEnd
		setIsFocused(isIncludedInPassage)
	}, [verseEnd, verseOrder, verseStart])

	return (
		<span
			data-verse-order={verseOrder}
			className={twMerge(
				'rc-verse scroll-mt-[65px]',
				isStudyMode && 'block relative select-none cursor-pointer',
			)}
			onClick={() => setIsFocused((prev) => !prev)}
		>
			<span
				className={twMerge(
					'border-b-2 border-b-transparent transition duration-quick ease-in',
					isFocused && 'border-b-borderEmphasized',
				)}
			>
				{children}
			</span>
		</span>
	)
}
