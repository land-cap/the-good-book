'use client'

import { Dialog, DialogTrigger } from '@ark-ui/react'
import { useAtom } from 'jotai'
import { useSetAtom } from 'jotai/index'
import { useEffect } from 'react'
import { cx } from 'styled-system/css'
import { button } from 'styled-system/recipes'

import { Icon } from '~/components'
import { isPreferencesMenuOpenAtom, isScrollLockedAtom } from '~/state'

import { PreferencesMenu } from './PreferencesMenu'
import { showFontOptionsAtom } from './preferencesMenu.state'

export const PreferencesMenuRoot = () => {
	const [isMenuOpen, setIsMenuOpen] = useAtom(isPreferencesMenuOpenAtom)

	const setShowFontOptions = useSetAtom(showFontOptionsAtom)

	const setIsBodyScrollLocked = useSetAtom(isScrollLockedAtom)
	useEffect(
		() => setIsBodyScrollLocked(isMenuOpen),
		[isMenuOpen, setIsBodyScrollLocked],
	)

	return (
		<Dialog.Root
			modal
			trapFocus
			preventScroll={false}
			open={isMenuOpen}
			onOpenChange={({ open }) => setIsMenuOpen(open)}
			onExitComplete={() => setShowFontOptions(false)}
		>
			<DialogTrigger
				className={cx(button({ icon: true }))}
				onClick={() => setIsMenuOpen(true)}
			>
				<Icon size={6} name="custom_typography" />
			</DialogTrigger>
			<PreferencesMenu />
		</Dialog.Root>
	)
}
