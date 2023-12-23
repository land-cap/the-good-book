'use client'

import { Portal, Select } from '@ark-ui/react'
import { useEffect, useState } from 'react'
import {
	ChapterPickerHeader,
	ChapterPickerTrigger,
	SelectContainer,
} from './ChapterPickerComponents'

export const ChapterPicker = ({
	bookName,
	chapter,
}: {
	chapter: string
	bookName: string
}) => {
	type Item = { label: string; value: string; disabled?: boolean }

	const items: Item[] = [
		{ label: 'Geneza', value: 'gen' },
		{ label: 'Exodul', value: 'exo' },
		{ label: 'Deuteronomul', value: 'deu' },
		{ label: 'Numneri', value: 'num' },
	]

	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : 'unset'
	}, [isOpen])

	return (
		<Select.Root
			items={items}
			className="h-full grow"
			onOpenChange={({ open }) => setIsOpen(open)}
		>
			<Select.Control className="h-full w-full">
				<ChapterPickerTrigger placeholder={`${bookName} ${chapter}`} />
				<Select.ClearTrigger>Clear</Select.ClearTrigger>
			</Select.Control>
			<Portal>
				<SelectContainer>
					<ChapterPickerHeader />
					<div className="col-[content]">
						<Select.ItemGroup id="book" className="pt-3">
							{items.map((item) => (
								<Select.Item
									key={item.value}
									item={item}
									className="group flex cursor-pointer content-center justify-between py-3"
								>
									<Select.ItemText className="after:[&:]:[content:'_'] relative leading-[1] after:absolute after:inset-x-0 after:-bottom-1 after:border-b-2 after:border-b-transparent after:transition after:duration-quick after:ease-in-out group-hover:after:border-b-fg">
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
