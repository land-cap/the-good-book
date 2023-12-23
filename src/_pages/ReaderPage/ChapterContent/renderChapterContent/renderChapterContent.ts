import { pipe } from 'ramda'
import { withPerformanceLog } from '~/helpers'
import { normalizeOriginalChapterHTML } from './normalizeOriginalChapterHTML'
import { parseChapterHTML } from './parseChapterHTML'
import { renderChapterContentFromOM } from './renderChapterContentFromOM'

export const renderChapterContent = (isStudyMode: boolean) =>
	pipe(
		withPerformanceLog(normalizeOriginalChapterHTML),
		withPerformanceLog(parseChapterHTML),
		(chapterOM) =>
			withPerformanceLog(renderChapterContentFromOM)(chapterOM, isStudyMode),
	)
