import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { flex, subgrid } from 'styled-system/patterns'

import { wChildren } from '~/component-helpers'

import { Separator } from '../atoms'

const HeaderContainer = wChildren(({ children }) => (
	<header
		className={subgrid({
			bg: 'bg.canvas',
			column: 'fullbleed',
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

export const Header = () => (
	<HeaderContainer>
		<Logo>The Good Book</Logo>
	</HeaderContainer>
)
