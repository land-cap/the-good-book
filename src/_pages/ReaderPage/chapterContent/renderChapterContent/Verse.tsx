'use client'

import { useAtomValue } from 'jotai/index'
import { createContext, type ReactNode } from 'react'
import { css, cx } from 'styled-system/css'

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
				{children}
			</span>
		</CurrVerseContext.Provider>
	)
}
