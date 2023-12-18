import * as cheerio from 'cheerio'
import { XMLParser } from 'fast-xml-parser'
import { type JSX } from 'react/jsx-runtime'
import { copyToClipBoard } from '~/helpers'

export type IntrinsicEl = keyof JSX.IntrinsicElements

export type ElNode = {
	[key in IntrinsicEl]: ChapterOMNode[]
} & {
	':@': { attrs: { className: string } }
}

export type TextNode = { '#text': string }

export type ChapterOMNode = ElNode | TextNode

export type ChapterOM = ChapterOMNode[]

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
})

export const getChapterObjectModel = (chapterContent: string) => {
	const $chapterContent = cheerio.load(chapterContent)

	$chapterContent('.verse:has(.content:only-child)')
		.filter((_, value) => {
			const text = $chapterContent(value).text()
			return /^\s*$/g.test(text)
		})
		.remove()

	$chapterContent('.chapter > .label').remove()

	$chapterContent('.chapter > [class^=ms]')
		.removeAttr('class')
		.addClass('large-section-title')

	$chapterContent('.chapter > .mr')
		.before(
			(_, html) =>
				`<h3 class='large-section-reference'>${$chapterContent(
					html,
				).text()}</h3>`,
		)
		.remove()

	$chapterContent('.chapter > [class^=s]')
		.removeAttr('class')
		.addClass('section-title')

	$chapterContent('.chapter > .p').removeAttr('class').addClass('paragraph')

	$chapterContent('.verse').removeAttr('class').addClass('verse')

	$chapterContent('.verse > .label').removeAttr('class').addClass('verse-label')

	const crossReferenceSelector = $chapterContent('.verse > .note')
	crossReferenceSelector.replaceWith(
		`<span class='cross-reference'>${crossReferenceSelector
			.children('.body')
			.html()}</span>`,
	)

	const chapterDataAsJson = parser.parse(
		$chapterContent('.book').html()!,
	) as unknown as ChapterOM

	copyToClipBoard($chapterContent('.book').html()!)

	return chapterDataAsJson
}
