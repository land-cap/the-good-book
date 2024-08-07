import { Fragment, type ReactNode } from 'react'

import type {
	ChapterOMNode,
	IntrinsicEl,
	TextNode,
} from '~/_pages/ReaderPage/chapterContent/renderChapterContent/normalizeOriginalChapterHTML'
import type { TBook } from '~/db'

import { processReferencesText } from './processReferencesText'

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

const isReference = (childrenOM: ChapterOMNode[]) =>
	//@ts-ignore
	childrenOM.length === 1 && !!childrenOM[0]?.['#text']

export const extractReferenceList = (
	childrenOM: ChapterOMNode[],
	currBookName: string,
	chapter: string,
	bookAbbrToName: Record<string, string>,
	bookNameToCode: Record<string, string>,
	singleChapterBookList: TBook[],
) => {
	const referencesText = isReference(childrenOM)
		? //@ts-ignore
		  (childrenOM[0]?.['#text'] as string)
		: null
	return referencesText
		? processReferencesText(
				currBookName,
				chapter,
				bookAbbrToName,
				bookNameToCode,
				singleChapterBookList,
		  )(referencesText)
		: undefined
}

export const extractFootnote = (childrenOM: ChapterOMNode[]) => {
	return !isReference(childrenOM)
		? buildFootnote(
				childrenOM.filter(
					//@ts-ignore
					//eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
					(OMItem) => OMItem?.[':@']?.attrs?.className !== 'fr',
				),
		  )
		: undefined
}
