import * as cheerio from 'cheerio'
import { XMLParser } from 'fast-xml-parser'
import { copyToClipBoard } from '~/helpers'

const transformAttributeName = (name: string) => {
	if (name === 'class') {
		return 'className'
	}

	return name
}

export const getNormalizedChapterContent = (
	chapterContent: string,
	isStudyMode: boolean,
) => {
	const $chapterContent = cheerio.load(chapterContent)

	$chapterContent('.verse:has(.content:only-child)')
		.filter((_, value) => {
			const text = $chapterContent(value).text()
			return /^\s*$/g.test(text)
		})
		.remove()

	const verseTag = isStudyMode ? 'span' : 'sup'
	const verseLabelSelector = $chapterContent('.verse > .label')
	verseLabelSelector
		.before((_, html) => `<${verseTag} class="label">${html}</${verseTag}>`)
		.remove()

	const mrSelector = $chapterContent('.mr')
	mrSelector
		.before(
			(_, html) =>
				`<div class="mr"><span class="heading">${html.trim()}</span></div>`,
		)
		.remove()

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
	})
	const chapterDataAsJson = parser.parse($chapterContent('.book').html()!)

	//copyToClipBoard($chapterContent('.book').html()!)
	copyToClipBoard(JSON.stringify(chapterDataAsJson, null, 2))

	return chapterDataAsJson as unknown as object
}
