'use client'

import { Portal } from '@ark-ui/react'
import { useAtomValue } from 'jotai'
import { Flex, Macrogrid } from 'styled-system/jsx'

import { Menu } from '~/components'

import { FontOptions } from './FontOptions'
import { Header } from './Header'
import { Preferences } from './Preferences'
import { showFontOptionsAtom } from './preferencesMenu.state'

export const PreferencesMenu = () => {
	const showFontOptions = useAtomValue(showFontOptionsAtom)

	return (
		<Portal>
			<Menu.Backdrop />
			<Menu.Positioner>
				<Menu.Content>
					<Flex direction="column">
						<Header />
						<Macrogrid
							direction="column"
							overflow="auto"
							overscrollBehavior="contain"
							h="fit-content"
						>
							{showFontOptions ? <FontOptions /> : <Preferences />}
						</Macrogrid>
					</Flex>
				</Menu.Content>
			</Menu.Positioner>
		</Portal>
	)
}
