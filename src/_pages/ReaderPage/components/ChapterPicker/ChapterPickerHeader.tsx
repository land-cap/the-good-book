import { Select } from '@ark-ui/react'

export const ChapterPickerHeader = () => (
	<div className="col-start-[content] border-b border-b-borderEmphasized">
		<div className="flex h-14 items-center justify-between">
			<Select.ItemGroupLabel htmlFor="book" className="font-bold">
				Book
			</Select.ItemGroupLabel>
		</div>
	</div>
)
