'use client'

import { Dialog, DialogTrigger } from '@ark-ui/react'
import { useAtom } from 'jotai'
import { useSetAtom } from 'jotai/index'
import { useEffect } from 'react'
import { css, cx } from 'styled-system/css'
import { button } from 'styled-system/recipes'

import { Icon } from '~/components'
import { isPreferencesMenuOpenAtom, isScrollLockedAtom } from '~/state'

import { PreferencesMenu } from './PreferencesMenu'

export const PreferencesMenuRoot = () => {
	const [isPreferencesMenuOpen, setIsPreferencesMenuOpen] = useAtom(
		isPreferencesMenuOpenAtom,
	)

	const setIsBodyScrollLocked = useSetAtom(isScrollLockedAtom)
	useEffect(
		() => setIsBodyScrollLocked(isPreferencesMenuOpen),
		[isPreferencesMenuOpen, setIsBodyScrollLocked],
	)

	return (
		<Dialog.Root
			preventScroll={false}
			open={isPreferencesMenuOpen}
			onOpenChange={({ open }) => setIsPreferencesMenuOpen(open)}
		>
			<DialogTrigger
				className={cx(
					button({ icon: true }),
					css({ borderLeftWidth: '1px', borderLeftColor: 'border.emphasized' }),
				)}
				onClick={() => setIsPreferencesMenuOpen(true)}
			>
				<Icon size={6} name="custom_typography" />
			</DialogTrigger>
			<PreferencesMenu />
		</Dialog.Root>
	)
}
