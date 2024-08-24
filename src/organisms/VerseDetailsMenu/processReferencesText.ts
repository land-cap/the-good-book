import { flatten, map, pipe, splitEvery, trim } from 'ramda'

import { type TBook } from '~/db'
import { type TCrossReference } from '~/state'

const transformReference = (
	currBookName: string,
	currChapter: string,
	bookAbbrToName: Record<string, string>,
) =>
	pipe(
		(reference: string) => replaceCapAbbr(reference, currBookName),
		replaceAbbrWithoutPeriod,
		(reference) => replaceVersAbbr(reference, currBookName, currChapter),
		(reference) => replaceBookAbbr(reference, bookAbbrToName),
		trim,
		splitSameBookReferences,
	)

const referencesTextToList = (referencesText: string) =>
	splitEvery(2)(referencesText.split(/(\d)\./g))
		.map((reference) => reference.join('').replaceAll('(subtitluri).', ''))
		.filter((reference) => reference.trim() !== '')

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
	reference
		.replace('Fapte ', 'Faptele Apostolilor ')
		.replace('Exod ', 'Exodul ')

const splitSameBookReferences = (reference: string) => {
	const referenceList = reference.split('; ')
	const bookNameRegex = /^(\d )?(\S+ )+/g
	const firstReference = referenceList[0]
	const bookNameMatch = firstReference?.match(bookNameRegex)
	referenceList[0] =
		firstReference?.replace(bookNameRegex, '') ?? referenceList[0]!
	return referenceList.map((reference) => `${bookNameMatch?.[0]}${reference}`)
}

const getVerseRange = ({
	referenceWithoutBookName,
	isSingleChapterBook,
	chapter,
}: {
	referenceWithoutBookName?: string
	isSingleChapterBook: boolean
	chapter?: string
}) => {
	const verseRangeStr = referenceWithoutBookName?.trim()?.split(':')[1]

	if (!verseRangeStr) {
		return undefined
	}

	if (isSingleChapterBook) {
		// chapter is actually verse for single-chapter books
		return chapter
	}

	return verseRangeStr
}

const addDetailsToReference = (
	reference: string,
	bookNameToCode: Record<string, string>,
	singleChapterBookList: TBook[],
): TCrossReference => {
	const bookNameMatch = reference.match(/^(\d )?(\D+ ){1,2}/g)
	const bookName = bookNameMatch?.[0]?.trim()
	const bookCode = bookName && bookNameToCode[bookName]
	const referenceWithoutBookName = bookName && reference.replace(bookName, '')
	const chapterStr = referenceWithoutBookName?.trim()?.split(':')[0]
	const isChapterRange = chapterStr?.includes('—')
	const chapter = isChapterRange ? chapterStr?.split('—')[0] : chapterStr

	const isSingleChapterBook = singleChapterBookList?.some(
		({ code }) => code === bookCode,
	)

	const verseRange = getVerseRange({
		referenceWithoutBookName,
		isSingleChapterBook,
		chapter,
	})

	return {
		label:
			isSingleChapterBook && chapter
				? reference.replace(chapter, `1:${chapter}`)
				: reference,
		bookCode: bookCode!,
		chapter: isSingleChapterBook ? 1 : Number(chapter),
		verseRange,
	}
}

export const processReferencesText = (
	currBookName: string,
	currChapter: string,
	bookAbbrToName: Record<string, string>,
	bookNameToCode: Record<string, string>,
	singleChapterBookList: TBook[],
) =>
	pipe(
		referencesTextToList,
		map((reference) =>
			transformReference(currBookName, currChapter, bookAbbrToName)(reference),
		),
		(referenceListList: string[][]) => flatten(referenceListList),
		map((reference) =>
			addDetailsToReference(reference, bookNameToCode, singleChapterBookList),
		),
	)
