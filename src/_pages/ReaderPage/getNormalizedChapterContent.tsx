import * as cheerio from 'cheerio'

export const getNormalizedChapterContent = (chapterContent: string) => {
	const $chapterContent = cheerio.load(chapterContent)
	const verseLabelSelector = $chapterContent('.verse > .label')
	verseLabelSelector
		.before((_, html) => `<sup class="label">${html}</sup>`)
		.remove()

	const mrSelector = $chapterContent('.mr')
	mrSelector
		.before(
			(_, html) =>
				`<div class="mr"><span class="heading">${html.trim()}</span></div>`,
		)
		.remove()
	return $chapterContent('.book').html()!
}
