'use client'

import { Popover, Portal } from '@ark-ui/react'
import { css } from 'styled-system/css'

export const CrossReferencePopover = ({
	references,
}: {
	references: string
}) => {
	return (
		<Popover.Root portalled data-component="CrossReference">
			<Popover.Trigger>
				&nbsp;
				<span
					className={css({
						cursor: 'pointer',
						m: '-1',
						p: '1',
						fontFamily: 'sans',
						fontWeight: '1000',
						color: 'fg.faded',
					})}
				>
					&dagger;
				</span>
			</Popover.Trigger>
			<Portal>
				<Popover.Positioner>
					<Popover.Content>
						<Popover.Title>Cross References</Popover.Title>
						<Popover.Description>{references}</Popover.Description>
					</Popover.Content>
				</Popover.Positioner>
			</Portal>
		</Popover.Root>
	)
}
