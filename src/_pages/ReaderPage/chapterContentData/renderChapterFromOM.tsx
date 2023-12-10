import { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import {
	type ChapterOM,
	type ElNode,
	type IntrinsicEl,
	type TextNode,
} from './getChapterOMFromHTMLString'

export const renderChapterFromOM = (chapterOM: ChapterOM) =>
	chapterOM.reduce((acc, item, i) => {
		if ((item as TextNode)?.['#text']) {
			return [...acc, (item as TextNode)['#text']]
		}

		const NodeType = Object.keys(item).filter(
			(keys) => keys !== ':@',
		)[0] as unknown as IntrinsicEl

		const { className } = (item as ElNode)[':@'].attrs

		if (/^s\d/g.test(className)) {
			return [
				...acc,
				<NodeType key={i} className={twMerge(className)}>
					{renderChapterFromOM((item as ElNode)[NodeType])}
				</NodeType>,
			]
		}

		if (/^p$/g.test(className)) {
			return [
				...acc,
				<NodeType key={i} className={twMerge(className)}>
					{renderChapterFromOM((item as ElNode)[NodeType])}
				</NodeType>,
			]
		}

		return [
			...acc,
			<NodeType key={i} className={twMerge(className)}>
				{renderChapterFromOM((item as ElNode)[NodeType])}
			</NodeType>,
		]
	}, [] as ReactNode[])
