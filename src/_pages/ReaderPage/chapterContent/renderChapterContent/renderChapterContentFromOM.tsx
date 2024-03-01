import { Fragment, type ReactNode } from 'react'

import type { TBook } from '~/db'
import { VerseDetailsButton } from '~/organisms/VerseDetailsMenu'

import { FancyAside, Quote } from './ChapterContentComponents'
import {
	JesusWords,
	LargeSectionReference,
	LargeSectionTitle,
	Paragraph,
	SectionTitle,
	VerseLabel,
} from './ChapterContentComponents.client'
import {
	type ChapterOM,
	type ChapterOMNode,
	type IntrinsicEl,
	type TextNode,
} from './normalizeOriginalChapterHTML'
import { Verse } from './Verse'

function isTextNode(node: ChapterOMNode): node is TextNode {
	return (node as TextNode)['#text'] !== undefined
}

export const renderChapterContentFromOM = (
	chapterOM: ChapterOM,
	bookName: string,
	bookAbbrToName: Record<string, string>,
	bookNameToCode: Record<string, string>,
	singleChapterBookList: TBook[],
) =>
	chapterOM.reduce((acc, item, i) => {
		if (isTextNode(item)) {
			return [...acc, item['#text']]
		}

		const NodeType = Object.keys(item).filter(
			(keys) => keys !== ':@',
		)[0] as unknown as IntrinsicEl

		const { className: nodeClass, 'data-usfm': verseId } = item[':@'].attrs

		if (nodeClass === 'large-section-title') {
			return [
				...acc,
				<LargeSectionTitle key={i}>
					{renderChapterContentFromOM(
						item[NodeType],
						bookName,
						bookAbbrToName,
						bookNameToCode,
						singleChapterBookList,
					)}
				</LargeSectionTitle>,
			]
		}

		if (nodeClass === 'large-section-reference') {
			return [
				...acc,
				<LargeSectionReference key={i}>
					{renderChapterContentFromOM(
						item[NodeType],
						bookName,
						bookAbbrToName,
						bookNameToCode,
						singleChapterBookList,
					)}
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
					{renderChapterContentFromOM(
						item[NodeType],
						bookName,
						bookAbbrToName,
						bookNameToCode,
						singleChapterBookList,
					)}
				</SectionTitle>,
			]
		}

		if (nodeClass === 'fancy-aside') {
			return [
				...acc,
				<FancyAside key={i}>
					{renderChapterContentFromOM(
						item[NodeType],
						bookName,
						bookAbbrToName,
						bookNameToCode,
						singleChapterBookList,
					)}
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
					{renderChapterContentFromOM(
						item[NodeType],
						bookName,
						bookAbbrToName,
						bookNameToCode,
						singleChapterBookList,
					)}
				</Paragraph>,
			]
		}

		if (nodeClass === 'verse') {
			const verseNumber = Number(verseId?.split('.')[2])
			return [
				...acc,
				<Verse key={i} verseNumber={verseNumber}>
					{renderChapterContentFromOM(
						item[NodeType],
						bookName,
						bookAbbrToName,
						bookNameToCode,
						singleChapterBookList,
					)}
				</Verse>,
			]
		}

		if (nodeClass === 'verse-label') {
			return [
				...acc,
				<VerseLabel
					key={i}
					verseNumber={
						renderChapterContentFromOM(
							item[NodeType],
							bookName,
							bookAbbrToName,
							bookNameToCode,
							singleChapterBookList,
						)[0] as unknown as number
					}
				/>,
			]
		}

		if (nodeClass === 'cross-reference') {
			return [
				...acc,
				<VerseDetailsButton
					key={i}
					childrenOM={item[NodeType]}
					bookName={bookName}
					bookAbbrToName={bookAbbrToName}
					bookNameToCode={bookNameToCode}
					singleChapterBookList={singleChapterBookList}
				/>,
			]
		}

		if (nodeClass === 'jesus-words') {
			return [
				...acc,
				<JesusWords key={i}>
					{renderChapterContentFromOM(
						item[NodeType],
						bookName,
						bookAbbrToName,
						bookNameToCode,
						singleChapterBookList,
					)}
				</JesusWords>,
			]
		}

		if (nodeClass === 'quote') {
			return [
				...acc,
				<Quote key={i}>
					{renderChapterContentFromOM(
						item[NodeType],
						bookName,
						bookAbbrToName,
						bookNameToCode,
						singleChapterBookList,
					)}
				</Quote>,
			]
		}

		return [
			...acc,
			<Fragment key={i}>
				{renderChapterContentFromOM(
					item[NodeType],
					bookName,
					bookAbbrToName,
					bookNameToCode,
					singleChapterBookList,
				)}
			</Fragment>,
		]
	}, [] as ReactNode[])
