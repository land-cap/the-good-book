'use client'

import { Dialog, DialogTrigger } from '@ark-ui/react'
import { useAtom, useAtomValue } from 'jotai'
import { useSetAtom } from 'jotai/index'
import { useEffect, useState } from 'react'
import { cx } from 'styled-system/css'
import { button } from 'styled-system/recipes'

import { Icon } from '~/components'
import {
	isPreferencesMenuSuspendedAtom,
	isScrollLockedAtom,
	showBackdropAtom,
	showPreferencesMenuAtom,
} from '~/state'

import { PreferencesMenu } from './PreferencesMenu'

export const PreferencesMenuRoot = () => {
	const [showPreferencesMenu, setShowPreferencesMenu] = useAtom(
		showPreferencesMenuAtom,
	)
	const isPreferencesMenuSuspended = useAtomValue(
		isPreferencesMenuSuspendedAtom,
	)
	const setShowBackdrop = useSetAtom(showBackdropAtom)
	const setIsBodyScrollLocked = useSetAtom(isScrollLockedAtom)

	const isOpen = showPreferencesMenu && !isPreferencesMenuSuspended

	useEffect(() => {
		setShowBackdrop(showPreferencesMenu)
	}, [showPreferencesMenu, setShowBackdrop])

	useEffect(
		() => setIsBodyScrollLocked(showPreferencesMenu),
		[showPreferencesMenu, setIsBodyScrollLocked],
	)

	const [scrollContainerKey, setScrollContainerKey] = useState(0)

	useEffect(() => {
		showPreferencesMenu && setScrollContainerKey((key) => key + 1)
	}, [showPreferencesMenu])

	return (
		<Dialog.Root
			id="preferences-menu"
			modal
			trapFocus
			preventScroll={false}
			open={isOpen}
			onOpenChange={({ open }) => {
				;(open || !isPreferencesMenuSuspended) && setShowPreferencesMenu(open)
			}}
		>
			<DialogTrigger className={cx(button({ icon: true, size: 'xl' }))}>
				<Icon size={6} code="custom_typography" />
			</DialogTrigger>
			<PreferencesMenu scrollContainerKey={scrollContainerKey} />
		</Dialog.Root>
	)
}
