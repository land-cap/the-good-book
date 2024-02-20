'use client'

import { useAtomValue } from 'jotai/index'
import { useSearchParams } from 'next/navigation'
import { createContext, type ReactNode } from 'react'
import { css, cx } from 'styled-system/css'
import { styled } from 'styled-system/jsx'

import { verseBreaksLineAtom } from '~/state'

export const CurrVerseContext = createContext(0)

export const Verse = ({
	children,
	verseNumber,
}: {
	children: ReactNode
	verseNumber: number
}) => {
	const verseBreaksLine = useAtomValue(verseBreaksLineAtom)

	const searchParams = useSearchParams()

	const verseStart = searchParams.get('verse-start')
		? Number(searchParams.get('verse-start'))
		: null

	const verseEnd = Number(searchParams.get('verse-end'))
		? Number(searchParams.get('verse-end'))
		: null

	const isHighlighted =
		(verseStart &&
			verseEnd &&
			verseNumber >= verseStart &&
			verseNumber <= verseEnd) ??
		(verseStart && !verseEnd && verseNumber === verseStart)

	return (
		<CurrVerseContext.Provider value={verseNumber}>
			<span
				data-component="Verse"
				className={cx(
					verseBreaksLine &&
						css({
							cursor: 'text',
							display: 'block',
							pos: 'relative',
						}),
				)}
			>
				{isHighlighted ? (
					<styled.mark
						css={{
							bg: 'transparent',
							color: 'inherit',
							textDecoration: 'underline',
							textDecorationColor: 'fg.moreFaded',
							textUnderlineOffset: '0.25em',
							textDecorationThickness: '1px',
							'& [data-component="VerseLabel"]': {
								fontWeight: 'bold',
								color: 'fg',
							},
						}}
					>
						{children}
					</styled.mark>
				) : (
					children
				)}
			</span>
		</CurrVerseContext.Provider>
	)
}
