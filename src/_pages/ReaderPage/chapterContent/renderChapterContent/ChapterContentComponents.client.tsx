'use client'

import { useAtomValue } from 'jotai'
import { type ReactNode } from 'react'
import { css, cx } from 'styled-system/css'
import { caption } from 'styled-system/patterns'

import {
	hideNonOriginalTextAtom,
	showRedLettersAtom,
} from '~/app/[readerMode]/_components/TopToolbar/TopToolbar.state'

const makeNonOriginalTextHideable =
	<P extends NonNullable<unknown>>(Component: (props: P) => ReactNode) =>
	//eslint-disable-next-line react/display-name
	(props: P) => {
		const hideNonOriginalText = useAtomValue(hideNonOriginalTextAtom)

		if (hideNonOriginalText) {
			return null
		}

		return <Component {...props} />
	}

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

export const LargeSectionTitle = makeNonOriginalTextHideable(
	({ children }: { children: ReactNode }) => (
		<h2
			data-component="LargeSectionTitle"
			className={caption({
				lineHeight: 'inherit',
			})}
		>
			{children}
		</h2>
	),
)

export const LargeSectionReference = makeNonOriginalTextHideable(
	({ children }: { children: ReactNode }) => (
		<h3
			data-component="LargeSectionReference"
			className={caption({
				lineHeight: 'inherit',
			})}
		>
			({children})
		</h3>
	),
)

export const LargeSectionCrossReference = makeNonOriginalTextHideable(
	({ children }: { children: ReactNode }) => (
		<h4
			data-component="LargeSectionCrossReference"
			className={caption({
				lineHeight: 'inherit',
			})}
		>
			{children}
		</h4>
	),
)

export const SectionTitle = makeNonOriginalTextHideable(
	({ children }: { children: ReactNode }) => (
		<h2
			data-component="SectionTitle"
			className={css({
				color: 'fg.subtle',
				fontSize: '1.25em',
			})}
		>
			{children}
		</h2>
	),
)
