'use client'

import { Dialog, DialogTrigger } from '@ark-ui/react'
import { useSetAtom } from 'jotai'
import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { flex, macrogrid } from 'styled-system/patterns'
import { button } from 'styled-system/recipes'

import { wChildren } from '~/component-helpers'
import { Icon, Separator } from '~/components'

import { PreferencesMenu } from './PreferencesMenu'
import { isPreferencesMenuOpenAtom } from './TopToolbar.state'

const Container = wChildren(({ children }) => (
	<header
		className={macrogrid({
			column: 'fullbleed',
			zIndex: '1',
			position: 'sticky',
			top: '0',
			bg: 'bg.canvas',
			transition: 'colors',
			transitionDuration: 'fast',
			transitionTimingFunction: 'ease-out',
		})}
	>
		<nav
			className={flex({
				align: 'center',
				column: 'content',
				direction: 'row',
				gap: '6',
				h: '14',
				justify: 'space-between',
			})}
		>
			{children}
		</nav>
		<Separator className={css({ column: 'content' })} />
	</header>
))

const Logo = styled('span', {
	base: { fontWeight: 'bold' },
})

export const TopToolbar = () => {
	const setIsPreferencesMenuOpen = useSetAtom(isPreferencesMenuOpenAtom)

	return (
		<Container>
			<Logo>The Good Book</Logo>
			<Dialog.Root preventScroll={false}>
				<DialogTrigger
					className={button({ icon: true })}
					onClick={() => setIsPreferencesMenuOpen(true)}
				>
					<Icon size={6} name="custom_typography" />
				</DialogTrigger>
				<PreferencesMenu />
			</Dialog.Root>
		</Container>
	)
}
