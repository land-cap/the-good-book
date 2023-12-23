import { Select } from '@ark-ui/react'
import { twMerge } from 'tailwind-merge'
import { wChildren } from '~/component-helpers'
import { macroGridCls } from '~/components'

export const ChapterPickerTrigger = ({
	placeholder,
}: {
	placeholder: string
}) => (
	<Select.Trigger className="flex h-full w-full place-items-center justify-center px-4 text-sm font-bold text-fgSubtle transition duration-quick ease-in-out hover:bg-bgSubtle active:text-fg sm:text-base">
		<Select.ValueText placeholder={placeholder} />
	</Select.Trigger>
)

export const SelectContainer = ({
	children,
}: {
	children: React.ReactNode
}) => (
	<Select.Positioner
		asChild
		className={twMerge(
			'fixed -left-2 h-[calc(100dvh_-_57px)] w-full bg-bgCanvas',
		)}
		style={{ top: 7, left: undefined }}
	>
		<Select.Content>
			<div className={twMerge(macroGridCls, 'max-h-full')}>{children}</div>
		</Select.Content>
	</Select.Positioner>
)

const ChapterPickerHeaderContainer = wChildren(({ children }) => (
	<div className="top-0 col-[fullbleed] grid select-none grid-cols-[subgrid] bg-bgCanvas dark:bg-bgSurface">
		<div className="col-start-[content] border-b border-b-borderEmphasized">
			<nav className="my-reader-gap flex flex-row items-center justify-between gap-6 md:my-reader-gap-md">
				{children}
			</nav>
		</div>
	</div>
))

export const ChapterPickerHeader = () => (
	<ChapterPickerHeaderContainer>
		<div className="font-bold">Book</div>
	</ChapterPickerHeaderContainer>
)
