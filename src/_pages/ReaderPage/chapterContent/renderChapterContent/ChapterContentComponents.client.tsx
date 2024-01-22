'use client'

import { useAtomValue } from 'jotai'
import { type ReactNode } from 'react'
import { css, cx } from 'styled-system/css'
import { caption } from 'styled-system/patterns'

import {
	hideNonOriginalTextAtom,
	showRedLettersAtom,
	verseBreaksLineAtom,
} from '~/organisms/TopToolbar/TopToolbar.state'

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
	const verseBreaksLine = useAtomValue(verseBreaksLineAtom)

	return (
		<span
			data-component="Verse"
			className={cx(
				verseBreaksLine &&
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
				fontSize: '0.75em',
				lineHeight: 'inherit',
				sm: { fontSize: '0.75em' },
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
				fontSize: '0.75em',
				lineHeight: 'inherit',
				sm: { fontSize: '0.75em' },
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
				fontSize: '0.75em',
				lineHeight: 'inherit',
				sm: { fontSize: '0.75em' },
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
	const verseBreaksLine = useAtomValue(verseBreaksLineAtom)

	const LabelTag = verseBreaksLine ? 'span' : 'sup'

	return (
		<span
			data-component="VerseLabel"
			className={cx(
				verseBreaksLine &&
					css({
						left: '-2',
						position: 'absolute',
						sm: { left: '-3' },
						top: 0,
						transform: 'translateX(-100%)',
					}),
			)}
		>
			{!verseBreaksLine && ' '}
			<LabelTag
				className={cx(
					css({ color: 'fg.subtle', fontFamily: 'sans', fontStyle: 'normal' }),
					verseBreaksLine &&
						css({
							fontSize: '0.625em',
							sm: { fontSize: '0.75em' },
						}),
				)}
			>
				{verseNumber}
			</LabelTag>
			{!verseBreaksLine && <>&nbsp;</>}
		</span>
	)
}
