'use client'

import { Portal, Select } from '@ark-ui/react'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { type ReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import { type getBookList } from '~/db'
import {
	ChapterPickerHeader,
	ChapterPickerTrigger,
	SelectContainer,
} from './ChapterPickerComponents'

export const ChapterPicker = ({
	bookName,
	chapter,
	bookList,
}: {
	chapter: string
	bookName: string
	bookList: Awaited<ReturnType<typeof getBookList>>
}) => {
	type Item = { label: string; value: string; disabled?: boolean }

	const items: Item[] = bookList.map(({ name, book: { code } }) => ({
		label: name,
		value: code,
	}))

	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : 'unset'
	}, [isOpen])

	const router = useRouter()

	const { readerMode } = useParams<ReaderPageParams>()

	return (
		<Select.Root
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
				<Select.ClearTrigger>Clear</Select.ClearTrigger>
			</Select.Control>
			<Portal>
				<SelectContainer>
					<ChapterPickerHeader />
					<div className="col-[content]">
						<Select.ItemGroup id="book" className="py-4">
							{items.map((item) => (
								<Select.Item
									key={item.value}
									item={item}
									className="group flex cursor-pointer content-center justify-between py-4"
								>
									<Select.ItemText className="after:[&:]:[content:'_'] relative leading-[1] after:absolute after:inset-x-0 after:-bottom-1 after:border-b-2 after:border-b-transparent after:transition after:duration-quick after:ease-in-out group-hover:after:border-b-current">
										{item.label}
									</Select.ItemText>
								</Select.Item>
							))}
						</Select.ItemGroup>
					</div>
				</SelectContainer>
			</Portal>
		</Select.Root>
	)
}
