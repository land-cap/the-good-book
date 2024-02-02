'use client'

import { Portal } from '@ark-ui/react'
import { useAtomValue } from 'jotai'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { type ReactNode, useEffect, useState } from 'react'
import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { macrogrid } from 'styled-system/patterns'

import { type TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import {
	Backdrop_OverlayMenu,
	Container_OverlayMenu,
	Positioner_OverlayMenu,
} from '~/components'
import { verseDetailsMenuCurrVerseAtom } from '~/state'

import { CrossReferenceList } from './CrossReferenceList'
import { getBookName } from './getBookName'
import { Header } from './Header'
import { processReferencesText } from './processReferencesText'

const Footnote = styled('p', {
	base: {
		column: 'content',
		my: '8',
		lineHeight: '2',
		color: 'fg.subtle',
	},
})

export const VerseDetailsMenu = ({
	referencesText,
	footnote,
}: {
	referencesText?: string
	footnote?: ReactNode[]
}) => {
	const { bookCode, chapter } = useParams<TReaderPageParams>()

	const [currBookName, setCurrBookName] = useState('')

	useEffect(() => {
		void (async () => {
			const bookName = await getBookName(bookCode)
			setCurrBookName(bookName)
		})()
	}, [bookCode])

	const [referenceList, setReference] = useState([] as string[])

	useEffect(() => {
		const references = referencesText
			? processReferencesText(currBookName, chapter)(referencesText)
			: undefined
		references && setReference(references)
	}, [chapter, currBookName, referencesText])

	const currVerse = useAtomValue(verseDetailsMenuCurrVerseAtom)

	const [verseDisplayValue, setVerseDisplayValue] = useState(0)

	useEffect(() => {
		currVerse && setVerseDisplayValue(currVerse)
	}, [currVerse])

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
						<Header title={`${currBookName} ${chapter}:${verseDisplayValue}`} />
						{!!referenceList && (
							<CrossReferenceList>
								{referenceList.map((reference) => (
									<li key={reference}>
										<Link
											href="/mat/1"
											className={css({
												textDecoration: 'underline',
												textDecorationColor: 'fg.faded',
											})}
										>
											{reference}
										</Link>
									</li>
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
