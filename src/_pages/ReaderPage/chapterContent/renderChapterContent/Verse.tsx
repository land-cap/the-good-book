'use client'

import { useAtomValue } from 'jotai/index'
import { createContext, type ReactNode } from 'react'
import { css, cx } from 'styled-system/css'
import { styled } from 'styled-system/jsx'

import { verseBreaksLineAtom } from '~/state'

import { useVerseRangeList } from './useVerseRangeList'

export const CurrVerseContext = createContext(0)

export const Verse = ({
	children,
	verseNumber,
}: {
	children: ReactNode
	verseNumber: number
}) => {
	const verseBreaksLine = useAtomValue(verseBreaksLineAtom)

	const verseRangeList = useVerseRangeList()

	const isHighlighted = verseRangeList?.includes(verseNumber)

	return (
		<CurrVerseContext.Provider value={verseNumber}>
			<span
				className={cx(
					verseBreaksLine &&
						css({
							cursor: 'text',
							display: 'block',
							pos: 'relative',
						}),
				)}
				data-component="Verse"
				data-verse-number={verseNumber}
			>
				{isHighlighted ? (
					<styled.mark
						css={{
							bg: 'transparent',
							color: 'inherit',
							textDecoration: 'underline',
							textDecorationColor: 'fg.moreFaded',
							textDecorationThickness: '1px',
							textUnderlineOffset: 'token(spacing.1)',
							animation: 'flashBackground 1s ease-in-out',
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
