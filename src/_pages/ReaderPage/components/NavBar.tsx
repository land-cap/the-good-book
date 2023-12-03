import { twMerge } from 'tailwind-merge'
import { setPageWidthCls } from '~/components/Page'

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
				)}>
				<span className={twMerge('text-md font-blacker text-fgSubtle')}>
					The Good Book
				</span>
				<span>
					{bookName} {chapter}
				</span>
			</div>
		</div>
	</nav>
)
