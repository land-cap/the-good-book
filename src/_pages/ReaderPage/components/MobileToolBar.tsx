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
	<div className="sticky bottom-0 col-[fullbleed] mt-reader-gap grid grid-cols-[subgrid] bg-bgSurface px-8 md:mt-reader-gap-md">
		<div className="col-start-[content] border-t border-t-borderEmphasized">
			<div className="flex h-14 items-center justify-between">
				<ReaderNavButton href={prevChapterHref} direction="left" />
				<button className="flex h-full grow place-items-center justify-center px-4 font-bold transition duration-quick ease-in-out hover:bg-bgMuted">
					{bookName} {chapter}
				</button>
				<ReaderNavButton href={nextChapterHref} direction="right" />
			</div>
		</div>
	</div>
)
