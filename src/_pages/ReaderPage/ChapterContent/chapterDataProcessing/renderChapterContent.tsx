import { Fragment, type ReactNode } from 'react'
import {
	CrossReference,
	FancyAside,
	JesusWords,
	LargeSectionCrossReference,
	LargeSectionReference,
	LargeSectionTitle,
	Paragraph,
	Quote,
	SectionTitle,
	VerseLabel,
} from '../ChapterContentComponents'
import { Verse } from '../ChapterContentComponents.client'
import {
	type ChapterOM,
	type ChapterOMNode,
	type IntrinsicEl,
	type TextNode,
} from './normalizeOriginalChapterHTML'

function isTextNode(node: ChapterOMNode): node is TextNode {
	return (node as TextNode)['#text'] !== undefined
}

export const renderChapterContent = (
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
					{renderChapterContent(item[NodeType], isStudyMode)}
				</LargeSectionTitle>,
			]
		}

		if (nodeClass === 'large-section-reference') {
			return [
				...acc,
				<LargeSectionReference key={i}>
					{renderChapterContent(item[NodeType], isStudyMode)}
				</LargeSectionReference>,
			]
		}

		if (nodeClass === 'large-section-cross-reference') {
			return [
				...acc,
				<LargeSectionCrossReference key={i}>
					{renderChapterContent(item[NodeType], isStudyMode)}
				</LargeSectionCrossReference>,
			]
		}

		if (nodeClass === 'section-title') {
			return [
				...acc,
				<SectionTitle key={i}>
					{renderChapterContent(item[NodeType], isStudyMode)}
				</SectionTitle>,
			]
		}

		if (nodeClass === 'fancy-aside') {
			return [
				...acc,
				<FancyAside key={i}>
					{renderChapterContent(item[NodeType], isStudyMode)}
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
					{renderChapterContent(item[NodeType], isStudyMode)}
				</Paragraph>,
			]
		}

		if (nodeClass === 'verse') {
			const verseId = item[':@'].attrs['data-usfm']!
			const verseOrder = Number(verseId.split('.')[2])

			return [
				...acc,
				<Verse key={i} isStudyMode={isStudyMode} verseOrder={verseOrder}>
					{renderChapterContent(item[NodeType], isStudyMode)}
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
						renderChapterContent(
							item[NodeType],
							isStudyMode,
						)[0] as unknown as number
					}
				/>,
			]
		}

		if (nodeClass === 'cross-reference') {
			return [
				...acc,
				<CrossReference
					key={i}
					isStudyMode={isStudyMode}
					referenceList={
						renderChapterContent(
							item[NodeType],
							isStudyMode,
						) as unknown as string
					}
				/>,
			]
		}

		if (nodeClass === 'jesus-words') {
			return [
				...acc,
				<JesusWords key={i}>
					{renderChapterContent(item[NodeType], isStudyMode)}
				</JesusWords>,
			]
		}

		if (nodeClass === 'quote') {
			return [
				...acc,
				<Quote key={i}>
					{renderChapterContent(item[NodeType], isStudyMode)}
				</Quote>,
			]
		}

		return [
			...acc,
			<Fragment key={i}>
				{renderChapterContent(item[NodeType], isStudyMode)}
			</Fragment>,
		]
	}, [] as ReactNode[])
