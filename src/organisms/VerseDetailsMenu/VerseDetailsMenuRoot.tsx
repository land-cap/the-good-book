'use client'

import { Dialog } from '@ark-ui/react'
import { useAtom, useAtomValue } from 'jotai'
import { useSetAtom } from 'jotai/index'
import { Fragment, type ReactNode, useEffect } from 'react'
import { useIsClient } from 'usehooks-ts'

import {
	type ChapterOMNode,
	type IntrinsicEl,
	type TextNode,
} from '~/_pages/ReaderPage/chapterContent/renderChapterContent/normalizeOriginalChapterHTML'
import {
	isScrollLockedAtom,
	showVerseDetailsAtom,
	verseDetailsMenuCurrVerseAtom,
} from '~/state'

import { VerseDetailsMenu } from './VerseDetailsMenu'

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

export const VerseDetailsMenuRoot = ({
	childrenOM,
}: {
	childrenOM: ChapterOMNode[]
}) => {
	const showVerseDetails = useAtomValue(showVerseDetailsAtom)

	const [currVerse, setCurrVerse] = useAtom(verseDetailsMenuCurrVerseAtom)

	const setIsBodyScrollLocked = useSetAtom(isScrollLockedAtom)
	useEffect(
		() => setIsBodyScrollLocked(!!currVerse),
		[currVerse, setIsBodyScrollLocked],
	)

	const isClient = useIsClient()

	//@ts-ignore
	const isReference = childrenOM.length === 1 && !!childrenOM[0]?.['#text']

	//@ts-ignore
	const references = isReference ? (childrenOM[0]?.['#text'] as string) : null

	const footnote = !isReference
		? buildFootnote(
				childrenOM.filter(
					//@ts-ignore
					//eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
					(OMItem) => OMItem?.[':@']?.attrs?.className !== 'fr',
				),
		  )
		: null

	if (!showVerseDetails) {
		return null
	}

	return (
		<Dialog.Root
			preventScroll={false}
			open={!!currVerse}
			onOpenChange={({ open }) => !open && setCurrVerse(0)}
		>
			{isClient ? (
				<VerseDetailsMenu
					referencesText={references ?? undefined}
					footnote={footnote ?? undefined}
				/>
			) : null}
		</Dialog.Root>
	)
}
