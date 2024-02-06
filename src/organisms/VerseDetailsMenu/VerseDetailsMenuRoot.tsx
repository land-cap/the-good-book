'use client'

import { Dialog } from '@ark-ui/react'
import { useAtom, useAtomValue } from 'jotai'
import { useSetAtom } from 'jotai/index'
import { useEffect } from 'react'
import { useIsClient } from 'usehooks-ts'

import {
	currVerseDetailsIDAtom,
	isScrollLockedAtom,
	showVerseDetailsAtom,
} from '~/state'

import { VerseDetailsMenu } from './VerseDetailsMenu'

export const VerseDetailsMenuRoot = () => {
	const showVerseDetails = useAtomValue(showVerseDetailsAtom)

	const [currVerseDetailsID, setCurrVerseDetailsID] = useAtom(
		currVerseDetailsIDAtom,
	)

	const setIsBodyScrollLocked = useSetAtom(isScrollLockedAtom)
	useEffect(
		() => setIsBodyScrollLocked(!!currVerseDetailsID),
		[currVerseDetailsID, setIsBodyScrollLocked],
	)

	const isClient = useIsClient()

	if (!showVerseDetails) {
		return null
	}

	return (
		<Dialog.Root
			preventScroll={false}
			open={!!currVerseDetailsID}
			onOpenChange={({ open }) => !open && setCurrVerseDetailsID(null)}
		>
			{isClient ? <VerseDetailsMenu /> : null}
		</Dialog.Root>
	)
}
