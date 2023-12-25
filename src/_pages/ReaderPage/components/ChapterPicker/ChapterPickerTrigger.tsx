import { Select } from '@ark-ui/react'

export const ChapterPickerTrigger = ({
	placeholder,
}: {
	placeholder: string
}) => (
	<Select.Trigger className="flex h-full w-full place-items-center justify-center px-4 font-bold text-fg transition duration-quick ease-in-out hover:bg-bgSubtle active:text-fgSubtle">
		<Select.ValueText placeholder={placeholder} />
	</Select.Trigger>
)
