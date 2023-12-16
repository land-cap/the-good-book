import { named, styled } from '~/component-helpers'
import { setPageWidthCls } from '~/components/Page'

const NavBarContainer = styled('div')('z-10 sticky top-0 w-full bg-bgSurface')

const PageWidthWrapper = styled('nav')(setPageWidthCls)

const BorderWrapper = styled('div')('border-b border-b-borderEmphasized')

const LayoutContainer = styled('div')(
	'flex sm:flex-row gap-6 justify-between items-center h-16',
)

const Logo = styled('span')('font-bold')

const CurrChapter = named('span')

export const NavBar = ({
	bookName,
	chapter,
}: {
	bookName: string
	chapter: string
}) => (
	<NavBarContainer>
		<PageWidthWrapper>
			<BorderWrapper>
				<LayoutContainer>
					<Logo>The Good Book</Logo>
					<CurrChapter>
						{bookName} {chapter}
					</CurrChapter>
				</LayoutContainer>
			</BorderWrapper>
		</PageWidthWrapper>
	</NavBarContainer>
)
