'use client'

import { Dialog } from '@ark-ui/react'
import { useAtom, useAtomValue } from 'jotai'
import { useSetAtom } from 'jotai/index'
import { useEffect, useState } from 'react'
import { useIsClient } from 'usehooks-ts'

import type { TBook } from '~/db'
import {
	currVerseDetailsIdAtom,
	isScrollLockedAtom,
	showVerseDetailsAtom,
} from '~/state'

import { VerseDetailsMenu } from './VerseDetailsMenu'

export const VerseDetailsMenuRoot = ({ bookList }: { bookList: TBook[] }) => {
	const showVerseDetails = useAtomValue(showVerseDetailsAtom)

	const [currVerseDetailsID, setCurrVerseDetailsID] = useAtom(
		currVerseDetailsIdAtom,
	)

	const setIsBodyScrollLocked = useSetAtom(isScrollLockedAtom)
	useEffect(
		() => setIsBodyScrollLocked(!!currVerseDetailsID),
		[currVerseDetailsID, setIsBodyScrollLocked],
	)

	const isClient = useIsClient()

	const [scrollContainerKey, setScrollContainerKey] = useState(0)

	useEffect(() => {
		currVerseDetailsID && setScrollContainerKey((key) => key + 1)
	}, [currVerseDetailsID])

	if (!showVerseDetails) {
		return null
	}

	return (
		<Dialog.Root
			id="verse-details-menu"
			modal
			trapFocus
			preventScroll={false}
			open={!!currVerseDetailsID}
			onOpenChange={({ open }) => !open && setCurrVerseDetailsID(null)}
		>
			{isClient ? (
				<VerseDetailsMenu
					bookList={bookList}
					scrollContainerKey={scrollContainerKey}
				/>
			) : null}
		</Dialog.Root>
	)
}
