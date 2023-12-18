import { Fragment, type ReactNode } from 'react'
import {
	CrossReference,
	JesusWords,
	LargeSectionReference,
	LargeSectionTitle,
	Paragraph,
	SectionTitle,
	Verse,
	VerseLabel,
} from '~/_pages/ReaderPage/components/ReaderComponents'
import {
	type ChapterOM,
	type ChapterOMNode,
	type IntrinsicEl,
	type TextNode,
} from './getChapterObjectModel'

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

		if (nodeClass === 'section-title') {
			return [
				...acc,
				<SectionTitle key={i}>
					{renderChapterContent(item[NodeType], isStudyMode)}
				</SectionTitle>,
			]
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
			return [
				...acc,
				<Verse key={i} isStudyMode={isStudyMode}>
					{renderChapterContent(item[NodeType], isStudyMode)}
				</Verse>,
			]
		}

		if (nodeClass === 'verse-label') {
			return [
				...acc,
				<VerseLabel key={i} isStudyMode={isStudyMode}>
					{renderChapterContent(item[NodeType], isStudyMode)}
				</VerseLabel>,
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

		return [
			...acc,
			<Fragment key={i}>
				{renderChapterContent(item[NodeType], isStudyMode)}
			</Fragment>,
		]
	}, [] as ReactNode[])
