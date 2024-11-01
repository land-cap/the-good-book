'use client'

import { Dialog, Portal } from '@ark-ui/react'
import { useSetAtom } from 'jotai'
import { Flex, Macrogrid } from 'styled-system/jsx'
import { button } from 'styled-system/recipes'

import { Header, Icon, Menu, SafeAreaBottom } from '~/components'
import { showBackdropAtom } from '~/state'

import { Preferences } from './Preferences'

export const PreferencesMenu = ({
	scrollContainerKey,
}: {
	scrollContainerKey: number
}) => {
	const setShowBackdrop = useSetAtom(showBackdropAtom)

	return (
		<Portal>
			<Menu.Positioner>
				<Menu.Content>
					<Flex direction="column" h="inherit" maxH="inherit">
						<Header
							title="Preferences"
							rightButton={
								<Dialog.CloseTrigger
									className={button({ icon: true, size: 'xl' })}
									onClick={() => setShowBackdrop(false)}
								>
									<Icon size={6} name="&#xe5cd;" />
								</Dialog.CloseTrigger>
							}
						/>
						<Macrogrid
							key={scrollContainerKey}
							direction="column"
							overflow="auto"
							overscrollBehavior="contain"
							h="fit-content"
							pt="8"
						>
							<Preferences />
							<SafeAreaBottom />
						</Macrogrid>
					</Flex>
				</Menu.Content>
			</Menu.Positioner>
		</Portal>
	)
}
