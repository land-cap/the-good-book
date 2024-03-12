'use client'

import { Portal } from '@ark-ui/react'
import { Flex, Macrogrid } from 'styled-system/jsx'

import { Menu } from '~/components'

import { FontOptions } from './FontOptions'
import { Header } from './Header'

export const FontOptionsMenu = () => (
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
						<FontOptions />
					</Macrogrid>
				</Flex>
			</Menu.Content>
		</Menu.Positioner>
	</Portal>
)
