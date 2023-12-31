import { Fragment, type ReactNode } from 'react'

import {
	FancyAside,
	JesusWords,
	LargeSectionCrossReference,
	LargeSectionReference,
	LargeSectionTitle,
	Paragraph,
	Quote,
	SectionTitle,
	VerseLabel,
} from './ChapterContentComponents'
import { Verse } from './ChapterContentComponents.client'
import {
	type ChapterOM,
	type ChapterOMNode,
	type IntrinsicEl,
	type TextNode,
} from './normalizeOriginalChapterHTML'

function isTextNode(node: ChapterOMNode): node is TextNode {
	return (node as TextNode)['#text'] !== undefined
}

export const renderChapterContentFromOM = (
	chapterOM: ChapterOM,
	isStudyMode: boolean,
) =>
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
					{renderChapterContentFromOM(item[NodeType], isStudyMode)}
				</LargeSectionTitle>,
			]
		}

		if (nodeClass === 'large-section-reference') {
			return [
				...acc,
				<LargeSectionReference key={i}>
					{renderChapterContentFromOM(item[NodeType], isStudyMode)}
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
					{renderChapterContentFromOM(item[NodeType], isStudyMode)}
				</SectionTitle>,
			]
		}

		if (nodeClass === 'fancy-aside') {
			return [
				...acc,
				<FancyAside key={i}>
					{renderChapterContentFromOM(item[NodeType], isStudyMode)}
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
					{renderChapterContentFromOM(item[NodeType], isStudyMode)}
				</Paragraph>,
			]
		}

		if (nodeClass === 'verse') {
			const verseId = item[':@'].attrs['data-usfm']!
			const verseOrder = Number(verseId.split('.')[2])

			return [
				...acc,
				<Verse key={i} isStudyMode={isStudyMode} verseOrder={verseOrder}>
					{renderChapterContentFromOM(item[NodeType], isStudyMode)}
				</Verse>,
			]
		}

		if (nodeClass === 'verse-label') {
			return [
				...acc,
				<VerseLabel
					key={i}
					isStudyMode={isStudyMode}
					verseNumber={
						renderChapterContentFromOM(
							item[NodeType],
							isStudyMode,
						)[0] as unknown as number
					}
				/>,
			]
		}

		if (nodeClass === 'cross-reference') {
			return acc
			//return [
			//	<CrossReference
			//		key={i}
			//		isStudyMode={isStudyMode}
			//		referenceList={
			//			renderChapterContentFromOM(
			//				item[NodeType],
			//				isStudyMode,
			//			) as unknown as string
			//		}
			//	/>,
			//]
		}

		if (nodeClass === 'jesus-words') {
			return [
				...acc,
				<JesusWords key={i}>
					{renderChapterContentFromOM(item[NodeType], isStudyMode)}
				</JesusWords>,
			]
		}

		if (nodeClass === 'quote') {
			return [
				...acc,
				<Quote key={i}>
					{renderChapterContentFromOM(item[NodeType], isStudyMode)}
				</Quote>,
			]
		}

		return [
			...acc,
			<Fragment key={i}>
				{renderChapterContentFromOM(item[NodeType], isStudyMode)}
			</Fragment>,
		]
	}, [] as ReactNode[])
