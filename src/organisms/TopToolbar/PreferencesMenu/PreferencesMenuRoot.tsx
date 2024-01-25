'use client'

import { Dialog, DialogTrigger } from '@ark-ui/react'
import { useAtom } from 'jotai'
import { button } from 'styled-system/recipes'

import { Icon, useDisableBodyScrollWhileDialogIsOpen } from '~/components'

import { isPreferencesMenuOpenAtom } from '../topToolbar.state'
import { PreferencesMenu } from './PreferencesMenu'

export const PreferencesMenuRoot = () => {
	const [isPreferencesMenuOpen, setIsPreferencesMenuOpen] = useAtom(
		isPreferencesMenuOpenAtom,
	)

	useDisableBodyScrollWhileDialogIsOpen({ isDialogOpen: isPreferencesMenuOpen })

	return (
		<Dialog.Root
			preventScroll={false}
			open={isPreferencesMenuOpen}
			onOpenChange={({ open }) => setIsPreferencesMenuOpen(open)}
		>
			<DialogTrigger
				className={button({ icon: true })}
				onClick={() => setIsPreferencesMenuOpen(true)}
			>
				<Icon size={6} name="custom_typography" />
			</DialogTrigger>
			<PreferencesMenu />
		</Dialog.Root>
	)
}
