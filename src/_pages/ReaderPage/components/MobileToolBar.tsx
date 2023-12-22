import { ReaderNavButton } from '~/_pages/ReaderPage/components/ReaderNavButton'

export const MobileToolBar = ({
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
	<div className="sticky bottom-0 col-span-3 mt-[2.5rem] grid grid-cols-[subgrid] bg-bgSurface px-8">
		<div className="col-start-[content] border-t border-t-borderEmphasized">
			<div className="flex h-14 items-center justify-between sm:h-16">
				<ReaderNavButton href={prevChapterHref} direction="left" />
				<span className="font-bold">
					{bookName} {chapter}
				</span>
				<ReaderNavButton href={nextChapterHref} direction="right" />
			</div>
		</div>
	</div>
)
