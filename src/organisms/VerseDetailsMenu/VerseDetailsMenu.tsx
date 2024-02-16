'use client'

import { Portal } from '@ark-ui/react'
import { useAtomValue } from 'jotai'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { macrogrid } from 'styled-system/patterns'

import { type TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import {
	Backdrop_OverlayMenu,
	Container_OverlayMenu,
	Positioner_OverlayMenu,
} from '~/components'
import { type TBook } from '~/db'
import { currVerseDetailsAtom, type TVerseDetails } from '~/state'

import { CrossReferenceList } from './CrossReferenceList'
import { Header } from './Header'

const Footnote = styled('p', {
	base: {
		column: 'content',
		my: '8',
		lineHeight: '2',
		color: 'fg.subtle',
	},
})

export const VerseDetailsMenu = ({ bookList }: { bookList: TBook[] }) => {
	const { bookCode, chapter } = useParams<TReaderPageParams>()

	const [currBookName, setCurrBookName] = useState('')

	useEffect(() => {
		const book = bookList.find((book) => book.code === bookCode)
		const bookName = book?.book_name?.name
		bookName && setCurrBookName(bookName)
	}, [bookCode, bookList])

	const verseDetails = useAtomValue(currVerseDetailsAtom)

	const [verseDetailsSnapshot, setVerseDetailsSnapshot] =
		useState<TVerseDetails | null>(null)

	useEffect(() => {
		verseDetails && setVerseDetailsSnapshot(verseDetails)
	}, [verseDetails])

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
						<Header
							title={`${currBookName} ${chapter}:${verseDetailsSnapshot?.verse}`}
						/>
						{!!verseDetailsSnapshot?.referenceList && (
							<CrossReferenceList>
								{verseDetailsSnapshot?.referenceList.map((reference) => (
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
						{!!verseDetailsSnapshot?.footnote && (
							<Footnote>{verseDetailsSnapshot?.footnote}</Footnote>
						)}
					</div>
				</Container_OverlayMenu>
			</Positioner_OverlayMenu>
		</Portal>
	)
}
