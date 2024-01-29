'use client'

import { Dialog, DialogTrigger } from '@ark-ui/react'
import { useSetAtom } from 'jotai/index'
import { useEffect, useState } from 'react'
import { css } from 'styled-system/css'
import { useIsClient } from 'usehooks-ts'

import { isScrollLockedAtom } from '~/state'

import { CrossReferencesMenu } from './CrossReferencesMenu'

export const CrossReferencesMenuRoot = ({
	references,
}: {
	references: string
}) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const setIsBodyScrollLocked = useSetAtom(isScrollLockedAtom)
	useEffect(
		() => setIsBodyScrollLocked(isMenuOpen),
		[isMenuOpen, setIsBodyScrollLocked],
	)

	const isClient = useIsClient()

	return (
		<Dialog.Root
			preventScroll={false}
			open={isMenuOpen}
			onOpenChange={({ open }) => setIsMenuOpen(open)}
		>
			&nbsp;
			<span
				className={css({
					cursor: 'pointer',
					m: '-1',
					p: '1',
					fontFamily: 'sans',
					fontWeight: '1000',
					color: 'fg.faded',
				})}
			></span>
			<DialogTrigger
				onClick={() => setIsMenuOpen(true)}
				className={css({
					cursor: 'pointer',
					display: 'inline',
					m: '-1',
					p: '1',
					fontFamily: 'sans',
					fontWeight: '1000',
					color: 'fg.faded',
				})}
			>
				&dagger;
			</DialogTrigger>
			{isClient ? <CrossReferencesMenu /> : null}
		</Dialog.Root>
	)
}
