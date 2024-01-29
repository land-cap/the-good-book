'use client'

import { Portal } from '@ark-ui/react'
import { splitEvery } from 'ramda'
import { macrogrid } from 'styled-system/patterns'

import {
	Backdrop_OverlayMenu,
	Container_OverlayMenu,
	Positioner_OverlayMenu,
} from '~/components'

import { CrossReferenceList } from './CrossReferenceList'
import { Header } from './Header'

export const CrossReferencesMenu = ({ references }: { references: string }) => {
	const referenceList = splitEvery(2)(references.split(/(\d)\./g)).map(
		(reference) => reference.join(''),
	)

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
						borderColor: 'border.emphasized',
						_osDark: {
							bg: 'bg.subtle',
						},
					}}
				>
					<div className={macrogrid()}>
						<Header />
						<CrossReferenceList>
							{referenceList.map((reference) => (
								<li key={reference}>{reference}</li>
							))}
						</CrossReferenceList>
					</div>
				</Container_OverlayMenu>
			</Positioner_OverlayMenu>
		</Portal>
	)
}
