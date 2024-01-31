'use client'

import { Dialog, DialogTrigger } from '@ark-ui/react'
import { useAtomValue } from 'jotai'
import { useSetAtom } from 'jotai/index'
import { Fragment, type ReactNode, useEffect, useState } from 'react'
import { css } from 'styled-system/css'
import { useIsClient } from 'usehooks-ts'

import { isScrollLockedAtom, showCrossReferencesAtom } from '~/state'

import {
	type ChapterOMNode,
	type IntrinsicEl,
	type TextNode,
} from '../normalizeOriginalChapterHTML'
import { CrossReferencesMenu } from './CrossReferencesMenu'

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

export const CrossReferencesMenuRoot = ({
	childrenOM,
}: {
	childrenOM: ChapterOMNode[]
}) => {
	const showCrossReferences = useAtomValue(showCrossReferencesAtom)

	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const setIsBodyScrollLocked = useSetAtom(isScrollLockedAtom)
	useEffect(
		() => setIsBodyScrollLocked(isMenuOpen),
		[isMenuOpen, setIsBodyScrollLocked],
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

	if (!showCrossReferences) {
		return null
	}

	return (
		<Dialog.Root
			preventScroll={false}
			open={isMenuOpen}
			onOpenChange={({ open }) => setIsMenuOpen(open)}
		>
			&nbsp;
			<span
				className={css({
					cursor: 'pointer',
					m: '-1',
					p: '1',
					fontFamily: 'sans',
					fontWeight: '1000',
					color: 'fg.faded',
				})}
			></span>
			<DialogTrigger
				onClick={() => setIsMenuOpen(true)}
				className={css({
					cursor: 'pointer',
					display: 'inline',
					m: '-1',
					p: '1',
					fontFamily: 'sans',
					fontWeight: '1000',
					color: 'fg.faded',
				})}
			>
				&dagger;
			</DialogTrigger>
			{isClient ? (
				<CrossReferencesMenu
					referencesText={references ?? undefined}
					footnote={footnote ?? undefined}
				/>
			) : null}
		</Dialog.Root>
	)
}
