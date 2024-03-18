'use client'

import { Dialog } from '@ark-ui/react'
import { useEscapeKeydown } from '@radix-ui/react-use-escape-keydown'
import { useAtom } from 'jotai'
import { useSetAtom } from 'jotai/index'
import { useEffect } from 'react'

import {
	isPreferencesMenuSuspendedAtom,
	isScrollLockedAtom,
	showPreferencesMenuAtom,
	showThemeMenuAtom,
} from '~/state'

import { ThemeMenu } from './ThemeMenu'

export const ThemeMenuRoot = () => {
	const [isMenuOpen, setIsMenuOpen] = useAtom(showThemeMenuAtom)
	const [isPreferencesMenuSuspended, setIsPreferencesMenuSuspended] = useAtom(
		isPreferencesMenuSuspendedAtom,
	)
	const setShowPreferencesMenu = useSetAtom(showPreferencesMenuAtom)
	const setIsBodyScrollLocked = useSetAtom(isScrollLockedAtom)

	useEffect(
		() => setIsBodyScrollLocked(isMenuOpen),
		[isMenuOpen, setIsBodyScrollLocked],
	)

	const hideBackdrop = () => {
		setIsPreferencesMenuSuspended(false)
		setShowPreferencesMenu(false)
	}

	useEscapeKeydown(hideBackdrop)

	return (
		<Dialog.Root
			id="theme-menu"
			modal
			trapFocus
			preventScroll={false}
			open={isMenuOpen}
			onOpenChange={({ open }) => {
				setIsMenuOpen(open)
				!open &&
					!isPreferencesMenuSuspended &&
					setIsPreferencesMenuSuspended(false)
			}}
			onPointerDownOutside={hideBackdrop}
		>
			<ThemeMenu />
		</Dialog.Root>
	)
}
