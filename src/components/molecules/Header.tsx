import Link from 'next/link'
import { wChildren, wClassName } from '~/component-helpers'

const NavBarContainer = wChildren(({ children }) => (
	<div className="top-0 z-10 col-[fullbleed] grid select-none grid-cols-[subgrid] bg-bgCanvas dark:bg-bgSurface">
		<div className="col-start-[content] border-b border-b-borderEmphasized">
			<nav className="my-reader-gap flex flex-row items-center justify-between gap-6 md:my-reader-gap-md">
				{children}
			</nav>
		</div>
	</div>
))

const Logo = wClassName(Link)('font-black text-fgSubtle')

export const Header = () => (
	<NavBarContainer>
		<Logo href="/">The Good Book</Logo>
	</NavBarContainer>
)
