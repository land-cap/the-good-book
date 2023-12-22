import Link from 'next/link'
import { wChildren, wClassName, wName } from '~/component-helpers'
import { setPageWidthCls } from '~/components/Page'

const NavBarContainer = wChildren(({ children }) => (
	<div className="top-0 z-10 w-full bg-bgSurface sm:sticky">
		<div className={setPageWidthCls}>
			<div className="border-b border-b-borderEmphasized">
				<nav className="flex h-14 items-center justify-between gap-6 sm:h-16 sm:flex-row">
					{children}
				</nav>
			</div>
		</div>
	</div>
))

const Logo = wClassName(Link)('font-black')

const CurrChapter = wName('span')

export const NavBar = ({
	bookName,
	chapter,
}: {
	bookName: string
	chapter: string
}) => (
	<NavBarContainer>
		<Logo href="/">The Good Book</Logo>
		<CurrChapter className="hidden font-bold sm:block">
			{bookName} {chapter}
		</CurrChapter>
	</NavBarContainer>
)
