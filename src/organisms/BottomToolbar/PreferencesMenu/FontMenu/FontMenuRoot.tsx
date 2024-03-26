'use client'

import { Dialog } from '@ark-ui/react'
import { useEscapeKeydown } from '@radix-ui/react-use-escape-keydown'
import { useAtom } from 'jotai'
import { useSetAtom } from 'jotai/index'

import {
	isPreferencesMenuSuspendedAtom,
	showFontMenuAtom,
	showPreferencesMenuAtom,
} from '~/state'

import { FontMenu } from './FontMenu'

export const FontMenuRoot = () => {
	const [isMenuOpen, setIsMenuOpen] = useAtom(showFontMenuAtom)
	const [isPreferencesMenuSuspended, setIsPreferencesMenuSuspended] = useAtom(
		isPreferencesMenuSuspendedAtom,
	)
	const setShowPreferencesMenu = useSetAtom(showPreferencesMenuAtom)

	const hideBackdrop = () => {
		setIsPreferencesMenuSuspended(false)
		setShowPreferencesMenu(false)
	}

	useEscapeKeydown(hideBackdrop)

	return (
		<Dialog.Root
			id="font-menu"
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
			<FontMenu />
		</Dialog.Root>
	)
}
