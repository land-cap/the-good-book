'use client'

import { Dialog, DialogTrigger } from '@ark-ui/react'
import { useSetAtom } from 'jotai/index'
import { useEffect, useState } from 'react'
import { cx } from 'styled-system/css'
import { button } from 'styled-system/recipes'

import { Icon } from '~/components'
import { isScrollLockedAtom } from '~/state'

import { PreferencesMenu } from './PreferencesMenu'

export const PreferencesMenuRoot = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

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
