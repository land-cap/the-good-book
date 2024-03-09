'use client'

import { Portal } from '@ark-ui/react'
import { useAtomValue } from 'jotai'
import { Flex, Macrogrid } from 'styled-system/jsx'

import {
	Backdrop_OverlayMenu,
	Container_OverlayMenu,
	Positioner_OverlayMenu,
} from '~/components'

import { FontOptions } from './FontOptions'
import { Header } from './Header'
import { Preferences } from './Preferences'
import { showFontOptionsAtom } from './preferencesMenu.state'

export const PreferencesMenu = () => {
	const showFontOptions = useAtomValue(showFontOptionsAtom)

	return (
		<Portal>
			<Backdrop_OverlayMenu opacity="1/2" />
			<Positioner_OverlayMenu css={{ h: 'content' }}>
				<Container_OverlayMenu
					css={{
						h: 'content',
						maxH: 'calc(100dvh * 2 / 3)',
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
							{showFontOptions ? <FontOptions /> : <Preferences />}
						</Macrogrid>
					</Flex>
				</Container_OverlayMenu>
			</Positioner_OverlayMenu>
		</Portal>
	)
}
