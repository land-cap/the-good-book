'use client'

import { Portal } from '@ark-ui/react'
import { Flex, Macrogrid } from 'styled-system/jsx'

import {
	Backdrop_OverlayMenu,
	Container_OverlayMenu,
	Positioner_OverlayMenu,
} from '~/components'

import { Header } from './Header'
import { Preferences } from './Preferences'

export const PreferencesMenu = () => {
	return (
		<Portal>
			<Backdrop_OverlayMenu opacity="1/2" />
			<Positioner_OverlayMenu css={{ h: 'content' }}>
				<Container_OverlayMenu
					css={{
						h: 'content',
						maxH: 'calc(100dvh * 2 / 3)',
						pb: 'safe_area_bottom',
						borderTopWidth: '1px',
						borderColor: 'border',
					}}
				>
					<Flex direction="column" h="fit-content" maxH="calc(100dvh * 2 / 3)">
						<Header />
						<Macrogrid
							overflow="auto"
							overscrollBehavior="contain"
							h="fit-content"
						>
							<Preferences />
						</Macrogrid>
					</Flex>
				</Container_OverlayMenu>
			</Positioner_OverlayMenu>
		</Portal>
	)
}
