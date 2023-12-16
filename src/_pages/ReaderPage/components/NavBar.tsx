import { wChildren, wClassName, wName } from '~/component-helpers'
import { setPageWidthCls } from '~/components/Page'

const NavBarContainer = wChildren(({ children }) => (
	<div className="z-10 sticky top-0 w-full bg-bgSurface">
		<div className={setPageWidthCls}>
			<div className="border-b border-b-borderEmphasized">
				<nav className="flex sm:flex-row gap-6 justify-between items-center h-16">
					{children}
				</nav>
			</div>
		</div>
	</div>
))

const Logo = wClassName('span')('font-bold')

const CurrChapter = wName('span')

export const NavBar = ({
	bookName,
	chapter,
}: {
	bookName: string
	chapter: string
}) => (
	<NavBarContainer>
		<Logo>The Good Book</Logo>
		<CurrChapter>
			{bookName} {chapter}
		</CurrChapter>
	</NavBarContainer>
)
