const transformReference = (
	currBookName: string,
	currChapter: string,
	bookAbbrToName: Record<string, string>,
) =>
	pipe(
		(reference: string) => replaceCapAbbr(reference, currBookName),
		(reference) => replaceVersAbbr(reference, currBookName, currChapter),
		(reference) => replaceBookAbbr(reference, bookAbbrToName),
		replaceAbbrWithoutPeriod,
		trim,
		splitSameBookReferences,
	)

import { flatten, map, pipe, splitEvery, trim } from 'ramda'

import { type TCrossReference } from '~/state'

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

const replaceBookAbbr = (
	reference: string,
	bookAbbrToName: Record<string, string>,
) => {
	const match = /(\d )?\S+\./g.exec(reference)
	const bookAbbr = match?.[0].replace(/\./g, '')
	const bookName = bookAbbr && bookAbbrToName[bookAbbr]
	if (bookAbbr && !bookName) {
		throw new Error(`Book name not found for abbreviation: ${bookAbbr}`)
	}

	return bookAbbr && bookName
		? reference.replace(bookAbbr, bookName).replace(/\./g, '')
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

const addUrlToReference = (
	reference: string,
	bookNameToCode: Record<string, string>,
): TCrossReference => {
	const bookNameMatch = reference.match(/^(\d )?(\D+ ){1,2}/g)
	const bookName = bookNameMatch?.[0]?.trim()
	const bookCode = bookName && bookNameToCode[bookName]
	const referenceWithoutBookName = bookName && reference.replace(bookName, '')
	const chapter = referenceWithoutBookName?.trim()?.split(':')[0]
	//console.log({ reference, bookName, bookCode, chapter })
	return { label: reference, url: `/${bookCode}/${chapter}` }
}

export const processReferencesText = (
	currBookName: string,
	currChapter: string,
	bookAbbrToName: Record<string, string>,
	bookNameToCode: Record<string, string>,
) =>
	pipe(
		referencesTextToList,
		map((reference) =>
			transformReference(currBookName, currChapter, bookAbbrToName)(reference),
		),
		(referenceListList: string[][]) => flatten(referenceListList),
		map((reference) => addUrlToReference(reference, bookNameToCode)),
	)
