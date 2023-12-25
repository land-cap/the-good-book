import { Select } from '@ark-ui/react'
import { type TChapterPickerItem } from './ChapterPicker.types'

export const ChapterPickerListItem = ({
	item,
}: {
	item: TChapterPickerItem
}) => (
	<Select.Item
		item={item}
		className="group col-[fullbleed] grid cursor-pointer grid-cols-[subgrid] transition duration-quick ease-in-out hover:bg-bgSubtle"
	>
		<div className="col-[content] flex content-center justify-between py-4">
			<Select.ItemText className="leading-[1]">{item.label}</Select.ItemText>
		</div>
	</Select.Item>
)
