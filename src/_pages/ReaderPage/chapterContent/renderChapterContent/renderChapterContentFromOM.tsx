import { Fragment, type ReactNode } from 'react'

import { Verse } from '~/_pages/ReaderPage/chapterContent/renderChapterContent/Verse'

import { FancyAside, Paragraph, Quote } from './ChapterContentComponents'
import {
	JesusWords,
	LargeSectionReference,
	LargeSectionTitle,
	SectionTitle,
	VerseLabel,
} from './ChapterContentComponents.client'
import { CrossReferencesMenuRoot } from './CrossReferencesMenu'
import {
	type ChapterOM,
	type ChapterOMNode,
	type IntrinsicEl,
	type TextNode,
} from './normalizeOriginalChapterHTML'

function isTextNode(node: ChapterOMNode): node is TextNode {
	return (node as TextNode)['#text'] !== undefined
}

export const renderChapterContentFromOM = (chapterOM: ChapterOM) =>
	chapterOM.reduce((acc, item, i) => {
		if (isTextNode(item)) {
			return [...acc, item['#text']]
		}

		const NodeType = Object.keys(item).filter(
			(keys) => keys !== ':@',
		)[0] as unknown as IntrinsicEl

		const { className: nodeClass } = item[':@'].attrs

		if (nodeClass === 'large-section-title') {
			return [
				...acc,
				<LargeSectionTitle key={i}>
					{renderChapterContentFromOM(item[NodeType])}
				</LargeSectionTitle>,
			]
		}

		if (nodeClass === 'large-section-reference') {
			return [
				...acc,
				<LargeSectionReference key={i}>
					{renderChapterContentFromOM(item[NodeType])}
				</LargeSectionReference>,
			]
		}

		if (nodeClass === 'large-section-cross-reference') {
			return acc
		}

		if (nodeClass === 'section-title') {
			return [
				...acc,
				<SectionTitle key={i}>
					{renderChapterContentFromOM(item[NodeType])}
				</SectionTitle>,
			]
		}

		if (nodeClass === 'fancy-aside') {
			return [
				...acc,
				<FancyAside key={i}>
					{renderChapterContentFromOM(item[NodeType])}
				</FancyAside>,
			]
		}

		if (nodeClass === 'psalm-title') {
			return acc
		}

		if (nodeClass === 'paragraph') {
			return [
				...acc,
				<Paragraph key={i}>
					{renderChapterContentFromOM(item[NodeType])}
				</Paragraph>,
			]
		}

		if (nodeClass === 'verse') {
			return [
				...acc,
				<Verse key={i}>{renderChapterContentFromOM(item[NodeType])}</Verse>,
			]
		}

		if (nodeClass === 'verse-label') {
			return [
				...acc,
				<VerseLabel
					key={i}
					verseNumber={
						renderChapterContentFromOM(item[NodeType])[0] as unknown as number
					}
				/>,
			]
		}

		if (nodeClass === 'cross-reference') {
			return [
				...acc,
				<CrossReferencesMenuRoot key={i} childrenOM={item[NodeType]} />,
			]
		}

		if (nodeClass === 'jesus-words') {
			return [
				...acc,
				<JesusWords key={i}>
					{renderChapterContentFromOM(item[NodeType])}
				</JesusWords>,
			]
		}

		if (nodeClass === 'quote') {
			return [
				...acc,
				<Quote key={i}>{renderChapterContentFromOM(item[NodeType])}</Quote>,
			]
		}

		return [
			...acc,
			<Fragment key={i}>{renderChapterContentFromOM(item[NodeType])}</Fragment>,
		]
	}, [] as ReactNode[])
