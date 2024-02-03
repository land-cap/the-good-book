'use client'

import { useAtomValue, useSetAtom } from 'jotai'
import { useParams } from 'next/navigation'
import {
	Fragment,
	type ReactNode,
	useContext,
	useEffect,
	useId,
	useMemo,
	useState,
} from 'react'
import { css } from 'styled-system/css'

import type {
	ChapterOMNode,
	IntrinsicEl,
	TextNode,
} from '~/_pages/ReaderPage/chapterContent/renderChapterContent/normalizeOriginalChapterHTML'
import { CurrVerseContext } from '~/_pages/ReaderPage/chapterContent/renderChapterContent/Verse'
import type { TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import { getBookName } from '~/organisms/VerseDetailsMenu/getBookName'
import { processReferencesText } from '~/organisms/VerseDetailsMenu/processReferencesText'
import {
	showVerseDetailsAtom,
	verseDetailsAtomFamily,
	verseDetailsMenuCurrVerseAtom,
} from '~/state'

function isTextNode(node: ChapterOMNode): node is TextNode {
	return (node as TextNode)['#text'] !== undefined
}

const buildFootnote = (chapterOM: ChapterOMNode[]) =>
	chapterOM.reduce((acc, item, i) => {
		if (isTextNode(item)) {
			return [...acc, item['#text']]
		}

		const NodeType = Object.keys(item).filter(
			(keys) => keys !== ':@',
		)[0] as unknown as IntrinsicEl

		return [
			...acc,
			<Fragment key={i}>{buildFootnote(item[NodeType])}</Fragment>,
		]
	}, [] as ReactNode[])

const useIsReference = (childrenOM: ChapterOMNode[]) =>
	useMemo(
		//@ts-ignore
		() => childrenOM.length === 1 && !!childrenOM[0]?.['#text'],
		[childrenOM],
	)

export const VerseDetailsButton = ({
	childrenOM,
}: {
	childrenOM: ChapterOMNode[]
}) => {
	const id = useId()

	const [verseDetails, setVerseDetails] = useState(verseDetailsAtomFamily(id))

	const showVerseDetails = useAtomValue(showVerseDetailsAtom)

	const setDetailsMenuCurrVerse = useSetAtom(verseDetailsMenuCurrVerseAtom)

	const currVerse = useContext(CurrVerseContext)

	const { bookCode, chapter } = useParams<TReaderPageParams>()

	const [currBookName, setCurrBookName] = useState('')

	useEffect(() => {
		setVerseDetails((prev) => ({ ...prev, verse: currVerse }))
	}, [currVerse])

	useEffect(() => {
		void (async () => {
			const bookName = await getBookName(bookCode)
			setCurrBookName(bookName)
		})()
	}, [bookCode])

	useEffect(() => {
		console.log('verseDetails', verseDetails)
	}, [verseDetails])

	useEffect(() => {
		//@ts-ignore
		const isReference = childrenOM.length === 1 && !!childrenOM[0]?.['#text']
		const referencesText = isReference
			? //@ts-ignore
			  (childrenOM[0]?.['#text'] as string)
			: null

		const references = referencesText
			? processReferencesText(currBookName, chapter)(referencesText)
			: undefined

		references && setVerseDetails((prev) => ({ ...prev, references }))
	}, [chapter, childrenOM, currBookName, setVerseDetails])

	useEffect(() => {
		//@ts-ignore
		const isReference = childrenOM.length === 1 && !!childrenOM[0]?.['#text']
		const footnotes = !isReference
			? buildFootnote(
					childrenOM.filter(
						//@ts-ignore
						//eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
						(OMItem) => OMItem?.[':@']?.attrs?.className !== 'fr',
					),
			  )
			: undefined

		footnotes && setVerseDetails((prev) => ({ ...prev, footnotes }))
	}, [childrenOM, setVerseDetails])

	if (!showVerseDetails) {
		return null
	}

	return (
		<>
			&nbsp;
			<button
				onClick={() => setDetailsMenuCurrVerse(currVerse)}
				className={css({
					cursor: 'pointer',
					display: 'inline',
					m: '-1',
					p: '1',
					fontFamily: 'sans',
					fontWeight: 'bold',
					color: 'fg.faded',
					_active: { color: 'fg' },
					_canHover: { _hover: { color: 'fg' } },
					transition: 'colors',
					transitionDuration: 'fast',
					transitionTimingFunction: 'ease-out',
				})}
			>
				&dagger;
			</button>
		</>
	)
}
