'use client'

import { Dialog } from '@ark-ui/react'
import { useAtom, useAtomValue } from 'jotai'
import { useSetAtom } from 'jotai/index'
import { useEffect } from 'react'
import { useIsClient } from 'usehooks-ts'

import type { TBook } from '~/db'
import {
	currVerseDetailsIdAtom,
	enableVerseDetailsAtom,
	isScrollLockedAtom,
	showVerseDetailsMenuAtom,
} from '~/state'

import { VerseDetailsMenu } from './VerseDetailsMenu'

export const VerseDetailsMenuRoot = ({ bookList }: { bookList: TBook[] }) => {
	const showVerseDetails = useAtomValue(enableVerseDetailsAtom)

	const [showVerseDetailsMenu, setShowVerseDetailsMenu] = useAtom(
		showVerseDetailsMenuAtom,
	)

	const setCurrVerseDetailsId = useSetAtom(currVerseDetailsIdAtom)

	const setIsBodyScrollLocked = useSetAtom(isScrollLockedAtom)
	useEffect(
		() => setIsBodyScrollLocked(showVerseDetailsMenu),
		[setIsBodyScrollLocked, showVerseDetailsMenu],
	)

	const isClient = useIsClient()

	if (!showVerseDetails) {
		return null
	}

	return (
		<Dialog.Root
			id="verse-details-menu"
			modal
			trapFocus
			lazyMount
			unmountOnExit
			preventScroll={false}
			open={showVerseDetailsMenu}
			onOpenChange={({ open }) => setShowVerseDetailsMenu(open)}
			onExitComplete={() => setCurrVerseDetailsId(null)}
		>
			{isClient && <VerseDetailsMenu bookList={bookList} />}
		</Dialog.Root>
	)
}
