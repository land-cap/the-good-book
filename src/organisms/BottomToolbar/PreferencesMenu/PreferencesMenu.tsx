'use client'

import { Portal } from '@ark-ui/react'
import { Flex, Macrogrid } from 'styled-system/jsx'

import { Menu } from '~/components'

import { Header } from './Header'
import { Preferences } from './Preferences'

export const PreferencesMenu = () => (
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
						<Preferences />
					</Macrogrid>
				</Flex>
			</Menu.Content>
		</Menu.Positioner>
	</Portal>
)
