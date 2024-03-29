import { pipe } from 'ramda'

import { normalizeOriginalChapterHTML } from './normalizeOriginalChapterHTML'
import { parseChapterHTML } from './parseChapterHTML'
import { renderChapterContentFromOM } from './renderChapterContentFromOM'

export const renderChapterContent = pipe(
	normalizeOriginalChapterHTML,
	parseChapterHTML,
	renderChapterContentFromOM,
)
