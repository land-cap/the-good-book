'use client'

import { useAtomValue } from 'jotai/index'
import { useSearchParams } from 'next/navigation'
import { flatten, range } from 'ramda'
import { createContext, type ReactNode } from 'react'
import { css, cx } from 'styled-system/css'
import { styled } from 'styled-system/jsx'

import { verseBreaksLineAtom } from '~/state'

export const CurrVerseContext = createContext(0)

const computeVerseRange = (verseRangeStr: string) => {
	const generateRange = (rangeStr: string) => {
		const start = Number(rangeStr.split('-')?.[0])
		const end = Number(rangeStr.split('-')?.[1])
		return range(start)(end)
	}

	//eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return flatten(
		//@ts-ignore
		verseRangeStr?.split(',').reduce(
			(acc, range) =>
				//@ts-ignore
				range.includes('-')
					? [...acc, generateRange(range)]
					: [...acc, Number(range)],
			[] as number[],
		),
	) as number[]
}

export const Verse = ({
	children,
	verseNumber,
}: {
	children: ReactNode
	verseNumber: number
}) => {
	const verseBreaksLine = useAtomValue(verseBreaksLineAtom)

	const searchParams = useSearchParams()

	const verseRangeStr = searchParams.get('verse-range')

	const verseRangeList = verseRangeStr ? computeVerseRange(verseRangeStr) : []

	const isHighlighted = verseRangeList?.includes(verseNumber)

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
