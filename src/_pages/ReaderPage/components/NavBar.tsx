import { twMerge } from 'tailwind-merge'
import { setPageWidthCls } from '~/components/Page'
import { withCapsize } from '~/components/withCapsize'

//@ts-ignore
const Span = withCapsize('span')

export const NavBar = ({
	bookName,
	chapter,
}: {
	bookName: string
	chapter: string
}) => (
	<nav className={twMerge(setPageWidthCls, 'z-10 sticky top-0 bg-bgSurface')}>
		<div className={twMerge('border-b border-b-borderEmphasized')}>
			<div
				className={twMerge(
					'flex sm:flex-row gap-6 justify-between items-center h-16',
				)}
			>
				{/* @ts-ignore */}
				<Span fontSize="base" className={twMerge('font-blacker text-fgSubtle')}>
					The Good Book
				</Span>
				{/* @ts-ignore */}
				<Span fontSize="base">
					{bookName} {chapter}
				</Span>
			</div>
		</div>
	</nav>
)
