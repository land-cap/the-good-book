'use client'

import { Dialog, Portal } from '@ark-ui/react'
import { Flex, Macrogrid } from 'styled-system/jsx'
import { button } from 'styled-system/recipes'

import { Header, Icon, Menu } from '~/components'

import { Preferences } from './Preferences'

export const PreferencesMenu = () => (
	<Portal>
		<Menu.Positioner>
			<Menu.Content>
				<Flex direction="column">
					<Header
						title="Preferences"
						rightButton={
							<Dialog.CloseTrigger className={button({ icon: true })}>
								<Icon size={6} code="&#xe5cd;" />
							</Dialog.CloseTrigger>
						}
					/>
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
