'use client'

import { Portal } from '@ark-ui/react'
import { useParams } from 'next/navigation'
import { splitEvery } from 'ramda'
import { type ReactNode, useContext, useEffect, useState } from 'react'
import { styled } from 'styled-system/jsx'
import { macrogrid } from 'styled-system/patterns'

import { getBookName } from '~/_pages/ReaderPage/chapterContent/renderChapterContent/CrossReferencesMenu/getBookName'
import { CurrVerseContext } from '~/_pages/ReaderPage/chapterContent/renderChapterContent/Verse'
import { type TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import {
	Backdrop_OverlayMenu,
	Container_OverlayMenu,
	Positioner_OverlayMenu,
} from '~/components'

import { CrossReferenceList } from './CrossReferenceList'
import { Header } from './Header'

const Footnote = styled('p', {
	base: {
		column: 'content',
		my: '8',
		lineHeight: '2',
	},
})

export const CrossReferencesMenu = ({
	references,
	footnote,
}: {
	references?: string
	footnote?: ReactNode[]
}) => {
	const referenceList =
		references &&
		splitEvery(2)(references.split(/(\d)\./g))
			.map((reference) => reference.join(''))
			.filter((reference) => reference !== '')

	const currVerse = useContext(CurrVerseContext)

	const { bookCode, chapter } = useParams<TReaderPageParams>()

	const [bookName, setBookName] = useState('')
	useEffect(() => {
		void (async () => {
			const bookName = await getBookName(bookCode)
			setBookName(bookName)
		})()
	}, [bookCode])

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
						<Header title={`${bookName} ${chapter}:${currVerse}`} />
						{!!referenceList && (
							<CrossReferenceList>
								{referenceList.map((reference) => (
									<li key={reference}>{reference}</li>
								))}
							</CrossReferenceList>
						)}
						{!!footnote && <Footnote>{footnote}</Footnote>}
					</div>
				</Container_OverlayMenu>
			</Positioner_OverlayMenu>
		</Portal>
	)
}
