import Link from 'next/link'
import { styled } from 'styled-system/jsx'
import { flex, subgrid } from 'styled-system/patterns'
import { wChildren } from '~/component-helpers'

const HeaderContainer = wChildren(({ children }) => (
	<header
		className={subgrid({
			column: 'fullbleed',
			top: 0,
			bg: 'bg.surface',
		})}
	>
		<styled.nav
			className={flex({
				gridColumn: 'content',
				borderBottom: '1px solid token(colors.border.emphasized)',
				h: '14',
				direction: 'row',
				align: 'center',
				justify: 'space-between',
				gap: '6',
			})}
		>
			{children}
		</styled.nav>
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
