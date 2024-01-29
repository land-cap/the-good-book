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
				shift: 0,
				overflowPadding: 32,
				fitViewport: true,
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
								maxW: 'calc(100vw - token(spacing.8) * 2)',
								p: '4',
								bg: 'bg.canvas',
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
