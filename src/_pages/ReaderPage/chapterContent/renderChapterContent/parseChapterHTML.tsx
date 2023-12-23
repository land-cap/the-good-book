import { XMLParser } from 'fast-xml-parser'
import { type ChapterOM } from './normalizeOriginalChapterHTML'

const transformAttributeName = (name: string) => {
	if (name === 'class') {
		return 'className'
	}

	return name
}

const parser = new XMLParser({
	preserveOrder: true,
	ignoreAttributes: false,
	attributeNamePrefix: '',
	transformAttributeName,
	attributesGroupName: 'attrs',
	alwaysCreateTextNode: false,
	unpairedTags: ['hr', 'br'],
	processEntities: false,
	htmlEntities: true,
	removeNSPrefix: true,
	trimValues: false,
})

export const parseChapterHTML = (chapterContent: string) =>
	parser.parse(chapterContent) as unknown as ChapterOM
