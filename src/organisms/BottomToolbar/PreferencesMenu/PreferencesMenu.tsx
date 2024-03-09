'use client'

import { Portal } from '@ark-ui/react'
import { motion } from 'framer-motion'
import { useAtomValue } from 'jotai'
import { useEffect, useState } from 'react'
import useMeasure from 'react-use-measure'
import { Flex, Macrogrid } from 'styled-system/jsx'

import {
	Backdrop_OverlayMenu,
	Container_OverlayMenu,
	Positioner_OverlayMenu,
} from '~/components'
import { isPreferencesMenuOpenAtom } from '~/state'

import { FontOptions } from './FontOptions'
import { Header } from './Header'
import { Preferences } from './Preferences'
import { showFontOptionsAtom } from './preferencesMenu.state'

export const PreferencesMenu = () => {
	const showFontOptions = useAtomValue(showFontOptionsAtom)

	const isMenuOpen = useAtomValue(isPreferencesMenuOpenAtom)

	const [animateHeight, setAnimateHeight] = useState(false)

	useEffect(() => {
		if (!isMenuOpen) {
			setAnimateHeight(false)
		}
	}, [isMenuOpen])

	useEffect(() => {
		if (isMenuOpen) {
			setTimeout(() => setAnimateHeight(true), 300)
		}
	}, [isMenuOpen])

	const [ref, { height }] = useMeasure()

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
						<motion.div
							layout
							transition={{ duration: 0.3, ease: 'easeOut' }}
							animate={{ height: animateHeight ? height : undefined }}
						>
							<Macrogrid
								ref={ref}
								overflow="auto"
								overscrollBehavior="contain"
								h="fit-content"
							>
								{showFontOptions ? <FontOptions /> : <Preferences />}
							</Macrogrid>
						</motion.div>
					</Flex>
				</Container_OverlayMenu>
			</Positioner_OverlayMenu>
		</Portal>
	)
}
