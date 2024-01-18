'use client'

import { useAtomValue } from 'jotai'
import { type ReactNode } from 'react'
import { cva } from 'styled-system/css'

import {
	fontSizeAtom,
	leadingAtom,
} from '~/app/[bookCode]/_components/TopToolbar/TopToolbar.state'

export const chapterContentContainerRecipe = cva({
	base: {
		'--font-size': 'token(fontSizes.sm)',
		sm: {
			'--font-size': 'token(fontSizes.md)',
		},
		column: 'content',
		mt: 'reader_gap',
		lineHeight: '2em',
		'& * + [data-component="Paragraph"]': {
			mt: 'reader_gap',
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
})

export const ChapterContentContainer = ({
	children,
}: {
	children: ReactNode
}) => {
	const fontSize = useAtomValue(fontSizeAtom)
	const leading = useAtomValue(leadingAtom)

	return (
		<div className={chapterContentContainerRecipe({ fontSize, leading })}>
			{children}
		</div>
	)
}
