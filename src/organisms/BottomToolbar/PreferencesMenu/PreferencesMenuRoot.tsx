'use client'

import { Dialog, DialogTrigger } from '@ark-ui/react'
import { useAtom } from 'jotai'
import { useSetAtom } from 'jotai/index'
import { useEffect } from 'react'
import { cx } from 'styled-system/css'
import { button } from 'styled-system/recipes'

import { Icon } from '~/components'
import {
	isScrollLockedAtom,
	showBackdropAtom,
	showPreferencesMenu,
} from '~/state'

import { PreferencesMenu } from './PreferencesMenu'

export const PreferencesMenuRoot = () => {
	const [isMenuOpen, setIsMenuOpen] = useAtom(showPreferencesMenu)
	const setShowBackdrop = useSetAtom(showBackdropAtom)
	const setIsBodyScrollLocked = useSetAtom(isScrollLockedAtom)

	useEffect(() => {
		isMenuOpen && setShowBackdrop(true)
	}, [isMenuOpen, setShowBackdrop])

	useEffect(
		() => setIsBodyScrollLocked(isMenuOpen),
		[isMenuOpen, setIsBodyScrollLocked],
	)

	return (
		<Dialog.Root
			id="preferences-menu"
			modal
			trapFocus
			preventScroll={false}
			open={isMenuOpen}
			onOpenChange={({ open }) => setIsMenuOpen(open)}
			onPointerDownOutside={() => setShowBackdrop(false)}
		>
			<DialogTrigger
				className={cx(button({ icon: true }))}
				onClick={() => setIsMenuOpen(true)}
			>
				<Icon size={6} code="&#xe732;" />
			</DialogTrigger>
			<PreferencesMenu />
		</Dialog.Root>
	)
}
