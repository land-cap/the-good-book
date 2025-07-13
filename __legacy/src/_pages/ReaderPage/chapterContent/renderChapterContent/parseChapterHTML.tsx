import { XMLParser } from 'fast-xml-parser'

import { type ChapterOM } from './normalizeOriginalChapterHTML'

const transformAttributeName = (name: string) => {
	if (name === 'class') {
		return 'className'
	}

	return name
}

const parser = new XMLParser({
	alwaysCreateTextNode: false,
	attributeNamePrefix: '',
	attributesGroupName: 'attrs',
	htmlEntities: true,
	ignoreAttributes: false,
	preserveOrder: true,
	processEntities: false,
	removeNSPrefix: true,
	transformAttributeName,
	trimValues: false,
	unpairedTags: ['hr', 'br'],
})

export const parseChapterHTML = (chapterContent: string) =>
	parser.parse(chapterContent) as unknown as ChapterOM
