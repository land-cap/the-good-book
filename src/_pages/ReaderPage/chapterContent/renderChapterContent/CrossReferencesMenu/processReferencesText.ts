import { flatten, map, pipe, splitEvery, trim } from 'ramda'

import { bookAbbrToBookName } from './bookAbbrToBookName'

const referencesTextToList = (referencesText: string) =>
	splitEvery(2)(referencesText.split(/(\d)\./g))
		.map((reference) => reference.join(''))
		.filter((reference) => reference !== '')

const replaceCapAbbr = (reference: string, currBookName: string) =>
	reference.replace('Cap.', currBookName)

const replaceVersAbbr = (
	reference: string,
	currBookName: string,
	currChapter: string,
) => reference.replace('Vers. ', `${currBookName} ${currChapter}:`)

const replaceBookAbbr = (reference: string) => {
	const match = /\S+\./g.exec(reference)
	const bookAbbr = match?.[0].replace(/\./g, '')

	return bookAbbr
		? reference
				//@ts-ignore
				//eslint-disable-next-line @typescript-eslint/no-unsafe-argument
				.replace(bookAbbr, bookAbbrToBookName?.[bookAbbr] || bookAbbr)
				.replace(/\./g, '')
		: reference
}

const replaceAbbrWithoutPeriod = (reference: string) =>
	reference.replace('Fapte', 'Faptele Apostolilor')

const splitSameBookReferences = (reference: string) => {
	const referenceList = reference.split('; ')
	const bookNameRegex = /^(\d )?(\S+ )+/g
	const firstReference = referenceList[0]
	const bookNameMatch = firstReference?.match(bookNameRegex)
	referenceList[0] =
		firstReference?.replace(bookNameRegex, '') ?? referenceList[0]!
	return referenceList.map((reference) => `${bookNameMatch?.[0]}${reference}`)
}

export const processReferencesText = (
	currBookName: string,
	currChapter: string,
) =>
	pipe(
		referencesTextToList,
		map((reference) => replaceCapAbbr(reference, currBookName)),
		map((reference) => replaceVersAbbr(reference, currBookName, currChapter)),
		map(replaceBookAbbr),
		map(replaceAbbrWithoutPeriod),
		map(trim),
		map(splitSameBookReferences),
		(referenceListList: string[][]) => flatten(referenceListList),
	)
