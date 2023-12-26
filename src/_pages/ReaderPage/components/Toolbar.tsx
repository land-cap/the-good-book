import { twMerge } from 'tailwind-merge'
import { ReaderNavButton } from '~/_pages/ReaderPage/components/ReaderNavButton'
import { macroGridCls } from '~/components'

export const Toolbar = ({
	nextChapterHref,
	prevChapterHref,
	chapter,
	bookName,
}: {
	prevChapterHref: string
	nextChapterHref: string
	chapter: string
	bookName: string
}) => (
	<div className={twMerge('fixed bottom-0 w-full', macroGridCls)}>
		<div className="col-[fullbleed] grid select-none grid-cols-[subgrid] bg-bgSurface pb-[env(safe-area-inset-bottom,0)]">
			<div className="col-start-[content] border-t border-t-borderEmphasized">
				<div className="flex h-14 items-center justify-between">
					<ReaderNavButton href={prevChapterHref} direction="left" />
					<button className="flex h-full grow place-items-center justify-center px-4 font-bold transition duration-quick ease-in-out hover:bg-bgSubtle active:text-fgSubtle">
						{bookName} {chapter}
					</button>
					<ReaderNavButton href={nextChapterHref} direction="right" />
				</div>
			</div>
		</div>
	</div>
)
