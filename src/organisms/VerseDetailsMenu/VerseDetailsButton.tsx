'use client'

import { useAtomValue, useSetAtom } from 'jotai'
import { Fragment, type ReactNode, useContext } from 'react'
import { css } from 'styled-system/css'

import { CurrVerseContext } from '~/_pages/ReaderPage/chapterContent/renderChapterContent/Verse'
import { showVerseDetailsAtom, verseDetailsMenuCurrVerseAtom } from '~/state'

import {
	type ChapterOMNode,
	type IntrinsicEl,
	type TextNode,
} from '../../_pages/ReaderPage/chapterContent/renderChapterContent/normalizeOriginalChapterHTML'

function isTextNode(node: ChapterOMNode): node is TextNode {
	return (node as TextNode)['#text'] !== undefined
}

const buildFootnote = (chapterOM: ChapterOMNode[]) =>
	chapterOM.reduce((acc, item, i) => {
		if (isTextNode(item)) {
			return [...acc, item['#text']]
		}

		const NodeType = Object.keys(item).filter(
			(keys) => keys !== ':@',
		)[0] as unknown as IntrinsicEl

		return [
			...acc,
			<Fragment key={i}>{buildFootnote(item[NodeType])}</Fragment>,
		]
	}, [] as ReactNode[])

export const VerseDetailsButton = () => {
	const showVerseDetails = useAtomValue(showVerseDetailsAtom)

	const setDetailsMenuCurrVerse = useSetAtom(verseDetailsMenuCurrVerseAtom)

	const currVerse = useContext(CurrVerseContext)

	if (!showVerseDetails) {
		return null
	}

	return (
		<span>
			&nbsp;
			<span
				className={css({
					cursor: 'pointer',
					m: '-1',
					p: '1',
					fontFamily: 'sans',
					fontWeight: '1000',
					color: 'fg.faded',
				})}
			></span>
			<button
				onClick={() => setDetailsMenuCurrVerse(currVerse)}
				className={css({
					cursor: 'pointer',
					display: 'inline',
					m: '-1',
					p: '1',
					fontFamily: 'sans',
					fontWeight: '1000',
					color: 'fg.faded',
				})}
			>
				&dagger;
			</button>
		</span>
	)
}
