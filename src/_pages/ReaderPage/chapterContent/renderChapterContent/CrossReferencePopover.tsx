'use client'

import { Popover, Portal } from '@ark-ui/react'
import { css } from 'styled-system/css'
import { useIsClient } from 'usehooks-ts'

export const CrossReferencePopover = ({
	references,
}: {
	references: string
}) => {
	const isClient = useIsClient()
	return (
		<Popover.Root data-component="CrossReference" portalled positioning={{}}>
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
			{isClient ? (
				<Portal>
					<Popover.Positioner>
						<Popover.Content>
							<Popover.Title>Cross References</Popover.Title>
							<Popover.Description>{references}</Popover.Description>
						</Popover.Content>
					</Popover.Positioner>
				</Portal>
			) : null}
		</Popover.Root>
	)
}
