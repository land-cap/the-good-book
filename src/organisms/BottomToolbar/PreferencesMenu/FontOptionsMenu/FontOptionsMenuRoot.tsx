'use client'

import { Dialog } from '@ark-ui/react'
import { useAtom } from 'jotai'
import { useSetAtom } from 'jotai/index'
import { useEffect } from 'react'

import { isScrollLockedAtom, showBackdropAtom } from '~/state'

import { showFontOptionsAtom } from '../preferencesMenu.state'
import { FontOptionsMenu } from './FontOptionsMenu'

export const FontOptionsMenuRoot = () => {
	const [isMenuOpen, setIsMenuOpen] = useAtom(showFontOptionsAtom)
	const setShowBackdrop = useSetAtom(showBackdropAtom)
	const setIsBodyScrollLocked = useSetAtom(isScrollLockedAtom)

	useEffect(
		() => setIsBodyScrollLocked(isMenuOpen),
		[isMenuOpen, setIsBodyScrollLocked],
	)

	return (
		<Dialog.Root
			id="font-options-menu"
			modal
			trapFocus
			preventScroll={false}
			open={isMenuOpen}
			onOpenChange={({ open }) => setIsMenuOpen(open)}
			onExitComplete={() => setIsMenuOpen(false)}
			onPointerDownOutside={() => setShowBackdrop(false)}
		>
			<FontOptionsMenu />
		</Dialog.Root>
	)
}
