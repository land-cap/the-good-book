import { Select } from '@ark-ui/react'
import { Icon } from '~/components'

const ButtonClose = ({ onClose }: { onClose: () => void }) => (
	<Select.ClearTrigger
		onClick={onClose}
		className="flex h-14 w-14 place-content-center place-items-center transition duration-quick ease-in-out hover:bg-bgSubtle active:text-fgSubtle"
	>
		<Icon size={24} name="close" />
	</Select.ClearTrigger>
)

export const ChapterPickerHeader = ({ onClose }: { onClose: () => void }) => (
	<div className="col-start-[content] border-b border-b-borderEmphasized">
		<div className="flex h-14 items-center justify-between">
			<Select.ItemGroupLabel htmlFor="book" className="font-bold">
				Book
			</Select.ItemGroupLabel>
			<ButtonClose onClose={onClose} />
		</div>
	</div>
)
