'use client'

import { Popover, Portal } from '@ark-ui/react'
import { useState } from 'react'
import { css } from 'styled-system/css'
import { useIsClient } from 'usehooks-ts'

export const CrossReferencePopover = ({
	references,
}: {
	references: string
}) => {
	const isClient = useIsClient()

	const [isOpen, setIsOpen] = useState(false)

	return (
		<Popover.Root
			data-component="CrossReference"
			portalled
			onOpenChange={({ open }) => setIsOpen(open)}
			positioning={{
				gutter: 0,
				shift: 0,
			}}
		>
			<Popover.Trigger>
				&nbsp;
				<span
					className={css({
						cursor: 'pointer',
						m: '-1',
						p: '1',
						fontFamily: 'sans',
						fontWeight: '1000',
						color: isOpen ? 'fg' : 'fg.faded',
						transition: 'colors',
						transitionDuration: 'fast',
						transitionTimingFunction: 'ease-out',
					})}
				>
					&dagger;
				</span>
			</Popover.Trigger>
			{isClient ? (
				<Portal>
					<Popover.Positioner>
						<Popover.Content
							className={css({
								bg: 'bg.canvas',
								p: '4',
								borderWidth: '1px',
								borderColor: 'fg',
							})}
						>
							<Popover.Description
								className={css({ fontStyle: '1rem', fontWeight: 'bold' })}
							>
								{references}
							</Popover.Description>
						</Popover.Content>
					</Popover.Positioner>
				</Portal>
			) : null}
		</Popover.Root>
	)
}
