'use client'

import { useAtomValue } from 'jotai'
import { type ReactNode } from 'react'
import { css, cx } from 'styled-system/css'
import { caption } from 'styled-system/patterns'

import {
	fontAtom,
	showNonOriginalTextAtom,
	showRedLettersAtom,
	verseBreaksLineAtom,
} from '~/state'

const makeNonOriginalTextHideable =
	<P extends NonNullable<unknown>>(Component: (props: P) => ReactNode) =>
	//eslint-disable-next-line react/display-name
	(props: P) => {
		const showNonOriginalText = useAtomValue(showNonOriginalTextAtom)

		if (!showNonOriginalText) {
			return null
		}

		return <Component {...props} />
	}

export const JesusWords = ({ children }: { children: ReactNode }) => {
	const showRedLetters = useAtomValue(showRedLettersAtom)

	return (
		<span
			data-component="JesusWords"
			className={cx(showRedLetters && css({ color: 'fg.jesusWords' }))}
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
				fontFamily: 'inherit',
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
				fontFamily: 'inherit',
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
				textAlign: 'left',
			})}
		>
			{children}
		</h2>
	),
)

export const VerseLabel = ({ verseNumber }: { verseNumber: ReactNode }) => {
	const verseBreaksLine = useAtomValue(verseBreaksLineAtom)

	const LabelTag = verseBreaksLine ? 'span' : 'sup'

	const font = useAtomValue(fontAtom)

	return (
		<span
			data-component="VerseLabel"
			className={cx(
				css({
					display: 'inline-block',
					textIndent: 0,
					color: 'fg.subtle',
					textDecoration: 'none',
				}),
				verseBreaksLine &&
					css({
						left: '-1.5',
						pos: 'absolute',
						sm: { left: '-3' },
						top: 0,
						transform: 'translateX(-100%)',
					}),
			)}
		>
			{!verseBreaksLine && ' '}
			<LabelTag
				className={cx(
					css({ fontStyle: 'normal' }),
					verseBreaksLine &&
						css({
							fontFamily: font === 'sans' ? 'sans' : undefined,
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

export const Quote = ({ children }: { children: ReactNode }) => {
	const font = useAtomValue(fontAtom)

	return (
		<span
			data-component="Quote"
			className={css({
				display: 'block',
				fontFamily: font,
				textAlign: 'left',
			})}
		>
			{children}
		</span>
	)
}

export const Paragraph = ({ children }: { children: ReactNode }) => (
	<p data-component="Paragraph">{children}</p>
)

export const FancyAside = ({ children }: { children: ReactNode }) => {
	const font = useAtomValue(fontAtom)

	return (
		<p
			data-component="FancyAside"
			className={css({
				color: 'fg.subtle',
				fontFamily: font,
			})}
		>
			{children}
		</p>
	)
}
