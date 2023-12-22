import { ReaderNavButton } from '~/_pages/ReaderPage/components/ReaderNavButton'
import { type READER_MODE } from '~/_pages/ReaderPage/ReaderPage.types'

export const MobileToolBar = ({
	readerMode,
	bookCode,
	chapter,
	bookName,
}: {
	readerMode: READER_MODE
	bookCode: string
	chapter: string
	bookName: string
}) => (
	<div className="sticky bottom-0 col-span-3 mt-[2.5rem] bg-bgSurface px-8 sm:hidden">
		<div className="border-t border-t-borderEmphasized">
			<div className="flex h-14 items-center justify-between sm:h-16">
				<ReaderNavButton
					href={`/${readerMode}/${bookCode}/${Number(chapter) - 1}`}
					direction="left"
				/>
				<span className="font-bold">
					{bookName} {chapter}
				</span>
				<ReaderNavButton
					href={`/${readerMode}/${bookCode}/${Number(chapter) + 1}`}
					direction="right"
				/>
			</div>
		</div>
	</div>
)
