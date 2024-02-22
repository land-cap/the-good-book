import * as cheerio from 'cheerio'
import { type JSX } from 'react/jsx-runtime'

export type IntrinsicEl = keyof JSX.IntrinsicElements

export type VerseId = `${string}.${number}.${number}`

export type ElNode = {
	[key in IntrinsicEl]: ChapterOMNode[]
} & {
	':@': { attrs: { className: string; 'data-usfm'?: VerseId } }
}

export type TextNode = { '#text': string }

export type ChapterOMNode = ElNode | TextNode

export type ChapterOM = ChapterOMNode[]

export const normalizeOriginalChapterHTML = (chapterContent: string) => {
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

	$chapterContent('.chapter > .r')
		.before(
			(_, html) =>
				`<h4 class='large-section-cross-reference'>${$chapterContent(
					html,
				).text()}</h4>`,
		)
		.remove()

	$chapterContent('.chapter > [class^=s]')
		.removeAttr('class')
		.addClass('section-title')

	$chapterContent('.chapter > .cl').removeAttr('class').addClass('psalm-title')

	const fancyAsideSelector = $chapterContent('.chapter > .d')
	fancyAsideSelector.map((_, value) =>
		$chapterContent(value).replaceWith(
			`<p class='fancy-aside'>${$chapterContent(value)
				.children('.content')
				.html()}</p>`,
		),
	)

	$chapterContent('.chapter > .p').removeAttr('class').addClass('paragraph')

	$chapterContent('.verse').removeAttr('class').addClass('verse')

	$chapterContent('.verse > .label').removeAttr('class').addClass('verse-label')

	const crossReferenceSelector = $chapterContent('.verse > .note')
	crossReferenceSelector.map((_, value) =>
		$chapterContent(value).replaceWith(
			`<span class='cross-reference'>${$chapterContent(value)
				.children('.body')
				.html()}</span>`,
		),
	)

	$chapterContent('.verse .wj').removeAttr('class').addClass('jesus-words')

	$chapterContent('.chapter > .q').removeAttr('class').addClass('quote')

	const chapterHTML = $chapterContent('.chapter').html()

	if (!chapterHTML) {
		throw new Error('No chapter HTML')
	}

	return chapterHTML
}
