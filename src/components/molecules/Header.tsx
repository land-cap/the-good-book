import Link from 'next/link'
import { styled } from 'styled-system/jsx'
import { flex, subgrid } from 'styled-system/patterns'
import { wChildren } from '~/component-helpers'

const HeaderContainer = wChildren(({ children }) => (
	<header
		className={subgrid({
			bg: 'bg.surface',
			column: 'fullbleed',
			h: 'fit-content',
			top: 0,
		})}
	>
		<nav
			className={flex({
				align: 'center',
				borderBottom: '1px solid token(colors.border.emphasized)',
				direction: 'row',
				gap: '6',
				gridColumn: 'content',
				h: '14',
				justify: 'space-between',
			})}
		>
			{children}
		</nav>
	</header>
))

const LogoLink = styled(Link, {
	base: { fontWeight: 'bold' },
})

export const Header = () => (
	<HeaderContainer>
		<LogoLink href="/" prefetch>
			The Good Book
		</LogoLink>
	</HeaderContainer>
)
