import { twMerge } from 'tailwind-merge'
import { ReaderNavButton } from '~/_pages/ReaderPage/components/ReaderNavButton'
import { macroGridCls } from '~/components'
import { getBookList } from '~/db'
import { ChapterPicker } from './ChapterPicker'

export const Toolbar = async ({
	nextChapterHref,
	prevChapterHref,
	chapter,
	bookName,
}: {
	prevChapterHref: string
	nextChapterHref: string
	chapter: string
	bookName: string
}) => {
	const bookList = await getBookList()

	return (
		<div className={twMerge('fixed bottom-0 w-full', macroGridCls)}>
			<div className="col-[fullbleed] grid select-none grid-cols-[subgrid] bg-bgSurface px-8 pb-[env(safe-area-inset-bottom,0)]">
				<div className="col-start-[content] border-t border-t-borderEmphasized">
					<div className="flex h-14 items-center justify-between">
						<ReaderNavButton href={prevChapterHref} direction="left" />
						<ChapterPicker
							bookName={bookName}
							chapter={chapter}
							bookList={bookList}
						/>
						<ReaderNavButton href={nextChapterHref} direction="right" />
					</div>
				</div>
			</div>
		</div>
	)
}
