import { pipe } from 'ramda'

import { type TBook } from '~/db'

import { normalizeOriginalChapterHTML } from './normalizeOriginalChapterHTML'
import { parseChapterHTML } from './parseChapterHTML'
import { renderChapterContentFromOM } from './renderChapterContentFromOM'

export const renderChapterContent = (
	bookName: string,
	bookAbbrToName: Record<string, string>,
	bookNameToCode: Record<string, string>,
	singleChapterBookList: TBook[],
) =>
	pipe(normalizeOriginalChapterHTML, parseChapterHTML, (chapterOM) =>
		renderChapterContentFromOM(
			chapterOM,
			bookName,
			bookAbbrToName,
			bookNameToCode,
			singleChapterBookList,
		),
	)
