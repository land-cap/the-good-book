'use client'

import { useAtomValue } from 'jotai'
import { type ReactNode } from 'react'
import { css, cx } from 'styled-system/css'
import { caption } from 'styled-system/patterns'

import {
	hideNonOriginalTextAtom,
	isVerseBreaksLineAtom,
	showRedLettersAtom,
} from '~/app/[bookCode]/_components/TopToolbar/TopToolbar.state'

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

export const Verse = ({ children }: { children: ReactNode }) => {
	const isVerseBreaksLine = useAtomValue(isVerseBreaksLineAtom)

	return (
		<span
			data-component="Verse"
			className={cx(
				isVerseBreaksLine &&
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
}

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

export const VerseLabel = ({ verseNumber }: { verseNumber: ReactNode }) => {
	const isVerseBreaksLine = useAtomValue(isVerseBreaksLineAtom)

	const LabelTag = isVerseBreaksLine ? 'span' : 'sup'

	return (
		<span
			data-component="VerseLabel"
			className={cx(
				isVerseBreaksLine &&
					css({
						left: '-2',
						position: 'absolute',
						sm: { left: '-3' },
						top: 0,
						transform: 'translateX(-100%)',
					}),
			)}
		>
			{!isVerseBreaksLine && ' '}
			<LabelTag
				className={cx(
					css({ color: 'fg.subtle', fontFamily: 'sans', fontStyle: 'normal' }),
					isVerseBreaksLine &&
						css({
							fontSize: '0.625rem',
							sm: { fontSize: 'xs' },
						}),
				)}
			>
				{verseNumber}
			</LabelTag>
			{!isVerseBreaksLine && <>&nbsp;</>}
		</span>
	)
}
