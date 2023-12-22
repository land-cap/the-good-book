'use client'

import { useSearchParams } from 'next/navigation'
import { type ReactNode, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import './ChapterContent.css'

export const ChapterContentContainer = ({
	children,
}: {
	children: ReactNode
}) => {
	const searchParams = useSearchParams()
	const verseStart = parseInt(searchParams.get('verse-start')!)

	useEffect(() => {
		const passageStartVerse = document.querySelector(
			`.rc-verse[data-verse-order="${verseStart}"]`,
		)
		const passageStartVerseQuote =
			passageStartVerse?.parentElement?.classList?.contains('rc-quote') &&
			passageStartVerse.parentElement
		if (passageStartVerseQuote) {
			passageStartVerseQuote?.scrollIntoView()
		} else {
			passageStartVerse?.scrollIntoView()
		}
	}, [verseStart])
	return (
		<div
			className={twMerge(
				'reader',
				'mt-reader-gap md:mt-reader-gap-md text-base md:text-lg leading-[2em] md:leading-[2.25em]',
			)}
		>
			{children}
		</div>
	)
}
