'use client'

import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { flex, macrogrid } from 'styled-system/patterns'

import { wChildren } from '~/component-helpers'
import { Separator } from '~/components'

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

export const TopToolbar = () => (
	<Container>
		<Logo>The Good Book</Logo>
	</Container>
)
