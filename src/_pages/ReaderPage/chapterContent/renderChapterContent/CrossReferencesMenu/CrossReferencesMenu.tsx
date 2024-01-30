'use client'

import { Portal } from '@ark-ui/react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { splitEvery } from 'ramda'
import { type ReactNode, useContext, useEffect, useState } from 'react'
import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { macrogrid } from 'styled-system/patterns'

import { bookAbbreviations } from '~/_pages/ReaderPage/chapterContent/renderChapterContent/CrossReferencesMenu/bookAbbreviations'
import { type TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import {
	Backdrop_OverlayMenu,
	Container_OverlayMenu,
	Positioner_OverlayMenu,
} from '~/components'

import { CurrVerseContext } from '../../renderChapterContent/Verse'
import { CrossReferenceList } from './CrossReferenceList'
import { getBookName } from './getBookName'
import { Header } from './Header'

const Footnote = styled('p', {
	base: {
		column: 'content',
		my: '8',
		lineHeight: '2',
		color: 'fg.subtle',
	},
})

export const CrossReferencesMenu = ({
	references,
	footnote,
}: {
	references?: string
	footnote?: ReactNode[]
}) => {
	const currVerse = useContext(CurrVerseContext)

	const { bookCode, chapter } = useParams<TReaderPageParams>()

	const [bookName, setBookName] = useState('')

	useEffect(() => {
		void (async () => {
			const bookName = await getBookName(bookCode)
			setBookName(bookName)
		})()
	}, [bookCode])

	const referenceList =
		references &&
		splitEvery(2)(references.split(/(\d)\./g))
			.map((reference) => reference.join(''))
			.filter((reference) => reference !== '')

	const referenceListWithBookName = (referenceList as string[])?.map(
		(reference) => {
			const match = /\w+\./g.exec(reference)
			const bookAbbr = match?.[0].replace(/\./g, '')
			if (bookAbbr === 'Cap') return reference.replace('Cap.', bookName)
			if (/Fapte /g.test(reference))
				return reference.replace('Fapte', 'Faptele Apostolilor')
			return bookAbbr
				? reference
						//@ts-ignore
						//eslint-disable-next-line @typescript-eslint/no-unsafe-argument
						.replace(bookAbbr, bookAbbreviations?.[bookAbbr] || bookAbbr)
						.replace(/(\w+)\./g, '$1')
				: reference
		},
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
						<Header title={`${bookName} ${chapter}:${currVerse}`} />
						{!!referenceListWithBookName && (
							<CrossReferenceList>
								{referenceListWithBookName.map((reference) => (
									<li key={reference}>
										<Link
											href="/mat/1"
											className={css({
												textDecoration: 'underline',
												textDecorationColor: 'fg.faded',
												textUnderlineOffset: '0.25em',
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
