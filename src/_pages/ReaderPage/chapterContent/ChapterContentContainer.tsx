'use client'

import { useAtomValue } from 'jotai'
import { type ReactNode, useEffect } from 'react'
import { cva } from 'styled-system/css'

import {
	fontSizeOffsetAtom,
	justifyTextAtom,
	leadingAtom,
	verseBreaksLineAtom,
} from '~/state'

import { useVerseRangeList } from './renderChapterContent'

export const chapterContentContainerRecipe = cva({
	base: {
		'--font-size': 'token(fontSizes.sm)',
		column: 'content',
		mt: 'reader_gap',
		lineHeight: '2em',
		cursor: 'initial',
		userSelect: 'initial',
		'& *': {
			cursor: 'initial',
			userSelect: 'initial',
		},
		sm: {
			'--font-size': 'token(fontSizes.md)',
		},
		'& :not(:where([data-component="Quote"], [data-component="Paragraph"])) + :where([data-component="Quote"], [data-component="Paragraph"])':
			{
				mt: 'reader_gap',
			},
		'& :not([data-component="Quote"]) + [data-component="Quote"]': {
			mt: 'reader_gap',
		},
		'& :where([data-component="LargeSectionTitle"], [data-component="LargeSectionReference"], [data-component="LargeSectionCrossReference"]) + [data-component="SectionTitle"]':
			{
				mt: 'reader_gap',
			},
		'& :where([data-component="Quote"], [data-component="Paragraph"]) + :not(*:where([data-component="Quote"], [data-component="Paragraph"]))':
			{
				mt: 'reader_gap',
			},
		'& [data-component="FancyAside"] + [data-component="LargeSectionTitle"]': {
			mt: 'reader_gap',
		},
		'& [data-component="LargeSectionTitle"] + [data-component="FancyAside"]': {
			mt: 'reader_gap',
		},
		'& [data-component="Quote"] + :not([data-component="Quote"])': {
			mt: 'reader_gap',
		},
	},
	variants: {
		verseBreaksLine: {
			false: {
				'& [data-component="Paragraph"] + [data-component="Paragraph"]': {
					textIndent: '2em',
				},
			},
		},
		justifyText: {
			true: {
				textAlign: 'justify',
			},
		},
		fontSize: {
			[-2]: {
				fontSize: 'calc(var(--font-size) - 2px)',
			},
			[-1]: {
				fontSize: 'calc(var(--font-size) - 1px)',
			},
			[0]: {
				fontSize: 'var(--font-size)',
			},
			[1]: {
				fontSize: 'calc(var(--font-size) + 1px)',
			},
			[2]: {
				fontSize: 'calc(var(--font-size) + 2px)',
			},
			[3]: {
				fontSize: 'calc(var(--font-size) + 3px)',
			},
			[4]: {
				fontSize: 'calc(var(--font-size) + 4px)',
			},
			[5]: {
				fontSize: 'calc(var(--font-size) + 5px)',
			},
			[6]: {
				fontSize: 'calc(var(--font-size) + 6px)',
			},
			[7]: {
				fontSize: 'calc(var(--font-size) + 7px)',
			},
			[8]: {
				fontSize: 'calc(var(--font-size) + 8px)',
			},
		},
		leading: {
			1: {
				lineHeight: '1em',
			},
			1.25: {
				lineHeight: '1.25em',
			},
			1.5: {
				lineHeight: '1.5em',
			},
			1.75: {
				lineHeight: '1.75em',
			},
			2: {
				lineHeight: '2em',
			},
			2.25: {
				lineHeight: '2.25em',
			},
			2.5: {
				lineHeight: '2.5em',
			},
			2.75: {
				lineHeight: '2.75em',
			},
			3: {
				lineHeight: '3em',
			},
		},
	},
	compoundVariants: [
		{
			verseBreaksLine: true,
			justifyText: true,
			css: {
				textAlign: 'revert',
			},
		},
	],
})

export const ChapterContentContainer = ({
	children,
}: {
	children: ReactNode
}) => {
	const verseBreaksLine = useAtomValue(verseBreaksLineAtom)
	const justifyText = useAtomValue(justifyTextAtom)
	const fontSize = useAtomValue(fontSizeOffsetAtom)
	const leading = useAtomValue(leadingAtom)

	const verseRangeList = useVerseRangeList()

	const firstHighlightedVerse = verseRangeList?.[0]

	useEffect(() => {
		if (firstHighlightedVerse) {
			const verse = document.querySelector(
				`[data-verse-number="${firstHighlightedVerse}"]`,
			)
			const topOffset = verse?.getBoundingClientRect().top
			if (topOffset) {
				setTimeout(
					() =>
						window.scrollTo({
							top: topOffset,
							behavior: 'instant',
						}),
					0,
				)
			}
		}
	}, [firstHighlightedVerse])

	return (
		<div
			className={chapterContentContainerRecipe({
				verseBreaksLine,
				justifyText,
				fontSize,
				leading,
			})}
		>
			{children}
		</div>
	)
}
