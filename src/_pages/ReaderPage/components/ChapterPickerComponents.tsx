import { Select } from '@ark-ui/react'
import { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { macroGridCls } from '~/components'

export const ChapterPickerTrigger = ({
	placeholder,
}: {
	placeholder: string
}) => (
	<Select.Trigger className="flex h-full w-full place-items-center justify-center px-4 font-bold text-fg transition duration-quick ease-in-out hover:bg-bgSubtle active:text-fgSubtle">
		<Select.ValueText placeholder={placeholder} />
	</Select.Trigger>
)

export const SelectContainer = ({ children }: { children: ReactNode }) => (
	<Select.Positioner
		asChild
		className={twMerge(
			'fixed -left-2 h-[calc(100dvh_-_57px_-_env(safe-area-inset-bottom,0))] w-full bg-bgSurface',
		)}
		style={{ top: 7, left: undefined }}
	>
		<Select.Content>
			<div
				className={twMerge(
					macroGridCls,
					'h-full overflow-hidden [grid-template-rows:auto_1fr]',
				)}
			>
				{children}
			</div>
		</Select.Content>
	</Select.Positioner>
)

export const ChapterPickerHeader = () => (
	<div className="col-start-[content] border-b border-b-borderEmphasized">
		<div className="flex h-14 items-center justify-between">
			<Select.ItemGroupLabel htmlFor="book" className="font-bold">
				Book
			</Select.ItemGroupLabel>
		</div>
	</div>
)
