import { ReaderNavButton } from '~/_pages/ReaderPage/components/ReaderNavButton'

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
	<div className="sticky bottom-0 pb-[env(safe-area-inset-bottom)] col-[fullbleed] mt-reader-gap grid grid-cols-[subgrid] bg-bgCanvas px-8 dark:bg-bgSurface md:mt-reader-gap-md">
		<div className="col-start-[content] border-t border-t-borderEmphasized">
			<div className="flex h-16 items-center justify-between">
				<ReaderNavButton href={prevChapterHref} direction="left" />
				<button className="flex h-full grow place-items-center justify-center px-4 font-bold transition duration-quick ease-in-out hover:bg-bgSubtle">
					{bookName} {chapter}
				</button>
				<ReaderNavButton href={nextChapterHref} direction="right" />
			</div>
		</div>
	</div>
)
