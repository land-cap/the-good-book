import { Select } from '@ark-ui/react'
import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { macroGridCls } from '~/components'

export const ChapterPickerContainer = ({
	children,
}: {
	children: ReactNode
}) => (
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
					'h-full overflow-hidden [grid-template-rows:auto_minamx(auto.1fr)]',
				)}
			>
				{children}
			</div>
		</Select.Content>
	</Select.Positioner>
)
