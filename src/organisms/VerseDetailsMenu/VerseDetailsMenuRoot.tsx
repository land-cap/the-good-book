'use client'

import { Dialog } from '@ark-ui/react'
import { useAtom, useAtomValue } from 'jotai'
import { useSetAtom } from 'jotai/index'
import { useEffect } from 'react'
import { useIsClient } from 'usehooks-ts'

import {
	isScrollLockedAtom,
	showVerseDetailsAtom,
	verseDetailsMenuCurrVerseAtom,
} from '~/state'

import { VerseDetailsMenu } from './VerseDetailsMenu'

export const VerseDetailsMenuRoot = () => {
	const showVerseDetails = useAtomValue(showVerseDetailsAtom)

	const [currVerse, setCurrVerse] = useAtom(verseDetailsMenuCurrVerseAtom)

	const setIsBodyScrollLocked = useSetAtom(isScrollLockedAtom)
	useEffect(
		() => setIsBodyScrollLocked(!!currVerse),
		[currVerse, setIsBodyScrollLocked],
	)

	const isClient = useIsClient()

	if (!showVerseDetails) {
		return null
	}

	return (
		<Dialog.Root
			preventScroll={false}
			open={!!currVerse}
			onOpenChange={({ open }) => !open && setCurrVerse(0)}
		>
			{isClient ? <VerseDetailsMenu /> : null}
		</Dialog.Root>
	)
}
