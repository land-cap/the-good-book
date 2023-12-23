import { pipe } from 'ramda'
import { normalizeOriginalChapterHTML } from './normalizeOriginalChapterHTML'
import { parseChapterData } from './parseChapterData'
import { renderChapterContent } from './renderChapterContent'

export const getChapterContentNode = (isStudyMode: boolean) =>
	pipe(normalizeOriginalChapterHTML, parseChapterData, (chapterObjectModel) =>
		renderChapterContent(chapterObjectModel, isStudyMode),
	)
