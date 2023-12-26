import Link from 'next/link'
import { styled } from 'styled-system/jsx'
import { subgrid } from 'styled-system/patterns'
import { wChildren } from '~/component-helpers'

const HeaderContainer = wChildren(({ children }) => (
	<styled.div
		className={subgrid({
			column: 'fullbleed',
			top: 0,
			bg: 'bg.surface',
		})}
	>
		<div className="col-start-[content] border-b border-b-borderEmphasized">
			<nav className="flex h-14 flex-row items-center justify-between gap-6">
				{children}
			</nav>
		</div>
	</styled.div>
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
