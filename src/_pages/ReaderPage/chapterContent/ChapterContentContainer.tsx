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
		column: 'content',
		mt: 'reader_gap',
		fontSize: 'sm',
		lineHeight: '2em',
	},
	variants: {
		fontSize: {
			12: {
				fontSize: '12px',
			},
			13: {
				fontSize: '13px',
			},
			14: {
				fontSize: '14px',
			},
			15: {
				fontSize: '15px',
			},
			16: {
				fontSize: '16px',
			},
			17: {
				fontSize: '17px',
			},
			18: {
				fontSize: '18px',
			},
			19: {
				fontSize: '19px',
			},
			20: {
				fontSize: '20px',
			},
			21: {
				fontSize: '21px',
			},
			22: {
				fontSize: '22px',
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
