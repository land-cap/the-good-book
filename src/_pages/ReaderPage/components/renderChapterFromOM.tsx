import { type ReactNode } from 'react'
import { type JSX } from 'react/jsx-runtime'

type IntrinsicEl = keyof JSX.IntrinsicElements

type ElNode = {
	[key in IntrinsicEl]: ChapterOMNode[]
} & {
	':@': { attrs: { className: string } }
}

type TextNode = { '#text': string }

type ChapterOMNode = ElNode | TextNode

export type ChapterOM = ChapterOMNode[]

export const renderChapterFromOM = (chapterOM: ChapterOM) =>
	chapterOM.reduce((acc, chapterOMItem, i) => {
		const NodeType = Object.keys(chapterOMItem).filter(
			(keys) => keys !== ':@',
		)[0] as unknown as IntrinsicEl | '#text'

		if (NodeType === '#text') {
			return [...acc, (chapterOMItem as TextNode)[NodeType]]
		}

		const attrs = (chapterOMItem as ElNode)[':@'].attrs

		return [
			...acc,
			<NodeType key={i} {...attrs}>
				{renderChapterFromOM((chapterOMItem as ElNode)[NodeType])}
			</NodeType>,
		]
	}, [] as ReactNode[])
