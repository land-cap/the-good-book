import { Select } from '@ark-ui/react'
import { type TChapterPickerItem } from './ChapterPicker.types'

export const ChapterPickerListItem = ({
	item,
}: {
	item: TChapterPickerItem
}) => (
	<Select.Item
		item={item}
		className="group flex cursor-pointer content-center justify-between py-4"
	>
		<Select.ItemText className="after:[&:]:[content:'_'] relative leading-[1] after:absolute after:inset-x-0 after:-bottom-1 after:border-b-2 after:border-b-transparent after:transition after:duration-quick after:ease-in-out group-hover:after:border-b-current">
			{item.label}
		</Select.ItemText>
	</Select.Item>
)
