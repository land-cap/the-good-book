import { Fragment, type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import {
	LargeSectionTitle,
	SectionTitle,
	VerseLabel,
} from '~/_pages/ReaderPage/components/ReaderComponents'
import {
	type ChapterOM,
	type ElNode,
	type IntrinsicEl,
	type TextNode,
} from './getChapterOMFromHTMLString'

export const renderChapterFromOM = (
	chapterOM: ChapterOM,
	isStudyMode: boolean,
) =>
	chapterOM.reduce((acc, item, i) => {
		if ((item as TextNode)?.['#text']) {
			return [...acc, (item as TextNode)['#text']]
		}

		const NodeType = Object.keys(item).filter(
			(keys) => keys !== ':@',
		)[0] as unknown as IntrinsicEl

		const { className } = (item as ElNode)[':@'].attrs

		if (/^(ms\d|mr)$/g.test(className)) {
			return [
				...acc,
				<LargeSectionTitle key={i}>
					{renderChapterFromOM((item as ElNode)[NodeType], isStudyMode)}
				</LargeSectionTitle>,
			]
		}

		if (/^s\d$/g.test(className)) {
			return [
				...acc,
				<SectionTitle key={i}>
					{renderChapterFromOM((item as ElNode)[NodeType], isStudyMode)}
				</SectionTitle>,
			]
		}

		if (/^heading$/g.test(className)) {
			return [
				...acc,
				<Fragment key={i}>
					{renderChapterFromOM((item as ElNode)[NodeType], isStudyMode)}
				</Fragment>,
			]
		}

		if (/^(p|verse v\d*$)/g.test(className)) {
			return [
				...acc,
				<NodeType key={i} className={twMerge(className)}>
					{renderChapterFromOM((item as ElNode)[NodeType], isStudyMode)}
				</NodeType>,
			]
		}

		if (/^verse-label$/g.test(className)) {
			return [
				...acc,
				<VerseLabel key={i} isStudyMode={isStudyMode}>
					{renderChapterFromOM((item as ElNode)[NodeType], isStudyMode)}
				</VerseLabel>,
			]
		}

		if (/(note|cl)/g.test(className)) {
			return [...acc, ' ']
		}

		return [
			...acc,
			<Fragment key={i}>
				{renderChapterFromOM((item as ElNode)[NodeType], isStudyMode)}
			</Fragment>,
		]
	}, [] as ReactNode[])
