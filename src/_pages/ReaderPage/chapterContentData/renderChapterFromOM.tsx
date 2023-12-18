import { Fragment, type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import {
	CrossReference,
	LargeSectionReference,
	LargeSectionTitle,
	SectionTitle,
	Verse,
	VerseLabel,
} from '~/_pages/ReaderPage/components/ReaderComponents'
import {
	type ChapterOM,
	type ChapterOMNode,
	type IntrinsicEl,
	type TextNode,
} from './getChapterOMFromHTMLString'

const classToReaderComponent = new Map([
	['verse', Verse],
	['verse-label', VerseLabel],
])

function isTextNode(node: ChapterOMNode): node is TextNode {
	return (node as TextNode)['#text'] !== undefined
}

export const renderChapterFromOM = (
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

		const { className } = item[':@'].attrs

		if (classToReaderComponent.has(className)) {
			const Component = classToReaderComponent.get(className)

			return Component
				? [
						...acc,
						<Component key={i} isStudyMode={isStudyMode}>
							{renderChapterFromOM(item[NodeType], isStudyMode)}
						</Component>,
				  ]
				: acc
		}

		if (/^ms\d$/g.test(className)) {
			return [
				...acc,
				<LargeSectionTitle key={i}>
					{renderChapterFromOM(item[NodeType], isStudyMode)}
				</LargeSectionTitle>,
			]
		}

		if (/^s\d$/g.test(className)) {
			return [
				...acc,
				<SectionTitle key={i}>
					{renderChapterFromOM(item[NodeType], isStudyMode)}
				</SectionTitle>,
			]
		}

		if (/^heading$/g.test(className)) {
			return [
				...acc,
				<Fragment key={i}>
					{renderChapterFromOM(item[NodeType], isStudyMode)}
				</Fragment>,
			]
		}

		if (/^(p$)/g.test(className)) {
			return [
				...acc,
				<p key={i} className={twMerge(className)}>
					{renderChapterFromOM(item[NodeType], isStudyMode)}
				</p>,
			]
		}

		if (/^large-section-reference$/g.test(className)) {
			return [
				...acc,
				<LargeSectionReference key={i}>
					{renderChapterFromOM(item[NodeType], isStudyMode)}
				</LargeSectionReference>,
			]
		}

		if (/^cross-reference$/g.test(className)) {
			return [
				...acc,
				<CrossReference
					key={i}
					isStudyMode={isStudyMode}
					referenceList={
						renderChapterFromOM(
							item[NodeType],
							isStudyMode,
						) as unknown as string
					}
				/>,
			]
		}

		if (/cl/g.test(className)) {
			return [
				...acc,
				<NodeType key={i} className={twMerge(className)}>
					{renderChapterFromOM(item[NodeType], isStudyMode)}
				</NodeType>,
			]
		}

		return [
			...acc,
			<Fragment key={i}>
				{renderChapterFromOM(item[NodeType], isStudyMode)}
			</Fragment>,
		]
	}, [] as ReactNode[])
