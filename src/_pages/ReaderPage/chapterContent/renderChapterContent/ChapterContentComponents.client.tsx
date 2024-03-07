'use client'

import { useAtomValue } from 'jotai'
import { type ReactNode } from 'react'
import { css, cx } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
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
				textAlign: 'left',
			})}
		>
			{children}
		</h2>
	),
)

const StyledParagraph = styled('p', {
	variants: {
		font: {
			sans: {
				fontFamily: 'sans',
			},
			serif: {
				fontFamily: 'serif',
			},
			soft: {
				fontFamily: 'soft',
			},
			dyslexic: {
				fontFamily: 'dyslexic',
			},
		},
	},
})

export const Paragraph = ({ children }: { children: ReactNode }) => {
	const font = useAtomValue(fontAtom)

	return (
		<StyledParagraph data-component="Paragraph" font={font}>
			{children}
		</StyledParagraph>
	)
}

export const VerseLabel = ({ verseNumber }: { verseNumber: ReactNode }) => {
	const verseBreaksLine = useAtomValue(verseBreaksLineAtom)

	const LabelTag = verseBreaksLine ? 'span' : 'sup'

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
						left: '-2',
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
					css({ fontFamily: 'sans', fontStyle: 'normal' }),
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

export const Quote = ({ children }: { children: ReactNode }) => {
	const font = useAtomValue(fontAtom)

	const fontFamily =
		font === 'serif' || font === 'soft' || font === 'dyslexic' ? font : 'mono'

	const fontStyle = font === 'serif' || font === 'soft' ? 'italic' : undefined

	return (
		<span
			data-component="Quote"
			className={css({
				display: 'block',
				fontFamily,
				fontStyle,
				textAlign: 'left',
			})}
		>
			{children}
		</span>
	)
}
