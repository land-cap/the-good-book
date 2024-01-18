'use client'

import { useAtomValue } from 'jotai'
import { type ReactNode } from 'react'
import { css, cx } from 'styled-system/css'

import { showRedLettersAtom } from '~/app/[readerMode]/_components/TopToolbar/TopToolbar.state'

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
		className={cx(
			isStudyMode &&
				css({
					cursor: 'text',
					display: 'block',
					position: 'relative',
					userSelect: 'text',
				}),
		)}
	>
		{children}
	</span>
)

export const JesusWords = ({ children }: { children: ReactNode }) => {
	const showRedLetters = useAtomValue(showRedLettersAtom)

	return (
		<span
			data-component="JesusWords"
			className={cx(showRedLetters && css({ color: 'fg.jesus_words' }))}
		>
			{children}
		</span>
	)
}
