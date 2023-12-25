'use client'

import { Portal, Select } from '@ark-ui/react'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { type TChapterPickerItem } from '~/_pages/ReaderPage/components/ChapterPicker/ChapterPicker.types'
import { ChapterPickerListItem } from '~/_pages/ReaderPage/components/ChapterPicker/ChapterPickerListItem'
import { macroGridCls } from '~/components'
import { type getBookList } from '~/db'
import { type ReaderPageParams } from '../../ReaderPage.types'
import { ChapterPickerContainer } from './ChapterPickerContainer'
import { ChapterPickerHeader } from './ChapterPickerHeader'
import { ChapterPickerTrigger } from './ChapterPickerTrigger'

export const ChapterPicker = ({
	bookName,
	chapter,
	bookList,
}: {
	chapter: string
	bookName: string
	bookList: Awaited<ReturnType<typeof getBookList>>
}) => {
	const items: TChapterPickerItem[] = bookList.map(
		({ name, book: { code } }) => ({
			label: name,
			value: code,
		}),
	)

	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : 'unset'
	}, [isOpen])

	const router = useRouter()

	const { readerMode } = useParams<ReaderPageParams>()

	return (
		<Select.Root
			open={isOpen}
			items={items}
			closeOnSelect={false}
			className="h-full grow"
			onOpenChange={({ open }) => setIsOpen(open)}
			onValueChange={({ value: [bookCode] }) => {
				if (bookCode) {
					router.push(`/${readerMode}/${bookCode.toLowerCase()}/1`)
				}
			}}
		>
			<Select.Control className="h-full w-full">
				<ChapterPickerTrigger placeholder={`${bookName} ${chapter}`} />
			</Select.Control>
			<Portal>
				<ChapterPickerContainer>
					<ChapterPickerHeader onClose={() => setIsOpen(false)} />
					<div
						className={twMerge(
							macroGridCls,
							'col-[fullbleed] h-full overflow-y-scroll',
						)}
					>
						<div className="col-[fullbleed] grid grid-cols-[subgrid]">
							<Select.ItemGroup
								id="book"
								className="col-[fullbleed] grid grid-cols-[subgrid] py-4"
							>
								{items.map((item) => (
									<ChapterPickerListItem key={item.value} item={item} />
								))}
							</Select.ItemGroup>
						</div>
					</div>
				</ChapterPickerContainer>
			</Portal>
		</Select.Root>
	)
}
