'use client'

import { Dialog, Portal } from '@ark-ui/react'
import { useSetAtom } from 'jotai'
import { Flex, Macrogrid } from 'styled-system/jsx'
import { button } from 'styled-system/recipes'

import { Header, Icon, Menu } from '~/components'
import {
	isPreferencesMenuSuspendedAtom,
	showPreferencesMenuAtom,
	showThemeMenuAtom,
} from '~/state'

import { ThemeOptions } from './ThemeOptions'

export const ThemeMenu = () => {
	const setShowThemeMenu = useSetAtom(showThemeMenuAtom)
	const setIsPreferencesMenuSuspended = useSetAtom(
		isPreferencesMenuSuspendedAtom,
	)
	const setShowPreferencesMenuOpen = useSetAtom(showPreferencesMenuAtom)

	return (
		<Portal>
			<Menu.Positioner>
				<Menu.Content>
					<Flex direction="column">
						<Header
							title="Theme"
							rightButton={
								<Dialog.CloseTrigger
									className={button({ icon: true, size: 'xl' })}
									onClick={() => {
										setTimeout(() => {
											setIsPreferencesMenuSuspended(false)
											setShowPreferencesMenuOpen(false)
										}, 150)
									}}
								>
									<Icon size={6} code="&#xe5cd;" />
								</Dialog.CloseTrigger>
							}
							leftButton={
								<button
									className={button({ icon: true, size: 'xl' })}
									onClick={(e) => {
										e.stopPropagation()
										setShowThemeMenu(false)
										setTimeout(() => setIsPreferencesMenuSuspended(false), 150)
									}}
								>
									<Icon size={6} code="&#xe5c4;" />
								</button>
							}
						/>
						<Macrogrid
							direction="column"
							overflow="auto"
							overscrollBehavior="contain"
							h="fit-content"
						>
							<ThemeOptions />
						</Macrogrid>
					</Flex>
				</Menu.Content>
			</Menu.Positioner>
		</Portal>
	)
}
