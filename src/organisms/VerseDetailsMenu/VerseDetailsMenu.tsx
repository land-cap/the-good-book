'use client'

import { Portal } from '@ark-ui/react'
import { useAtomValue, useSetAtom } from 'jotai'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { flex, macrogrid, underlined } from 'styled-system/patterns'

import { type TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import {
	Backdrop_OverlayMenu,
	Container_OverlayMenu,
	Positioner_OverlayMenu,
} from '~/components'
import { getBookWithCache, type TBook } from '~/db'
import { SafeAreaBottom } from '~/organisms/BottomToolbar/ChapterPickerMenu/SafeAreaBottom'
import {
	currVerseDetailsAtom,
	currVerseDetailsIDAtom,
	referenceOriginAtom,
	selectedReferenceAtom,
	type TCrossReference,
	type TVerseDetails,
} from '~/state'

import { CrossReferenceList } from './CrossReferenceList'
import { Header } from './Header'

const ReferenceLink = styled(Link, {
	base: underlined.raw(),
})

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
		const bookName = book?.book_name?.value
		bookName && setCurrBookName(bookName)
	}, [bookCode, bookList])

	const verseDetails = useAtomValue(currVerseDetailsAtom)

	const [staggeredVerseDetails, setStaggeredVerseDetails] =
		useState<TVerseDetails | null>(null)

	useEffect(() => {
		verseDetails && setStaggeredVerseDetails(verseDetails)
	}, [verseDetails])

	const setCurrVerseDetailsID = useSetAtom(currVerseDetailsIDAtom)

	const closeMenu = () => setCurrVerseDetailsID(null)

	const setReferenceOrigin = useSetAtom(referenceOriginAtom)

	const setSelectedReference = useSetAtom(selectedReferenceAtom)

	const handleReferenceLinkClick = async (reference: TCrossReference) => {
		closeMenu()
		const currBook = await getBookWithCache(bookCode)
		setSelectedReference(reference)
		if (currBook) {
			setReferenceOrigin({
				book: currBook,
				chapter: Number(chapter),
				verse: staggeredVerseDetails?.verse,
			})
		}
	}

	return (
		<Portal>
			<Backdrop_OverlayMenu opacity="1/2" />
			<Positioner_OverlayMenu css={{ h: 'content' }}>
				<Container_OverlayMenu
					css={{
						borderTopWidth: '1px',
						borderColor: 'border.emphasized',
					}}
				>
					<div
						className={flex({
							direction: 'column',
							h: 'fit-content',
							maxH: 'calc(100dvh * 2 / 3)',
						})}
					>
						<Header
							title={`${currBookName} ${chapter}:${staggeredVerseDetails?.verse}`}
						/>
						{!!staggeredVerseDetails?.referenceList && (
							<styled.div
								css={{
									overflow: 'auto',
									overscrollBehavior: 'contain',
									h: 'fit-content',
								}}
							>
								<CrossReferenceList>
									{staggeredVerseDetails?.referenceList.map((reference) => (
										<li
											className={css({ column: 'content' })}
											key={reference.label}
										>
											<ReferenceLink
												href={reference.url}
												onClick={() => handleReferenceLinkClick(reference)}
											>
												{reference.label}
											</ReferenceLink>
										</li>
									))}
								</CrossReferenceList>
								<SafeAreaBottom />
							</styled.div>
						)}
						{!!staggeredVerseDetails?.footnote && (
							<div className={macrogrid()}>
								<Footnote>{staggeredVerseDetails?.footnote}</Footnote>
								<SafeAreaBottom css={{ column: 'content' }} />
							</div>
						)}
					</div>
				</Container_OverlayMenu>
			</Positioner_OverlayMenu>
		</Portal>
	)
}
