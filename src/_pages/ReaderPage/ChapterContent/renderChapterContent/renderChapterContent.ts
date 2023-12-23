import { pipe } from 'ramda'
import {
	type ChapterOMNode,
	normalizeOriginalChapterHTML,
} from './normalizeOriginalChapterHTML'
import { parseChapterHTML } from './parseChapterHTML'
import { renderChapterContentFromOM } from './renderChapterContentFromOM'

export const renderChapterContent = (isStudyMode: boolean) =>
	pipe(
		normalizeOriginalChapterHTML,
		parseChapterHTML,
		(chapterOM: ChapterOMNode[]) =>
			renderChapterContentFromOM(chapterOM, isStudyMode),
	)
