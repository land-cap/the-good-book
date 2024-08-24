'use client'

import { Dialog, Portal } from '@ark-ui/react'
import { useAtomValue, useSetAtom } from 'jotai'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { css } from 'styled-system/css'
import { Flex, styled } from 'styled-system/jsx'
import { macrogrid, underlined } from 'styled-system/patterns'
import { button } from 'styled-system/recipes'

import { type TReaderPageParams } from '~/_pages'
import { Header, Icon, Menu, SafeAreaBottom } from '~/components'
import { getBookWithCache, type TBook } from '~/db'
import { useBuildReaderUrl } from '~/hooks'
import {
	currVerseDetailsAtom,
	currVerseDetailsIdAtom,
	referenceOriginAtom,
	selectedReferenceAtom,
	type TCrossReference,
	type TVerseDetails,
} from '~/state'

import { CrossReferenceList } from './CrossReferenceList'

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

export const VerseDetailsMenu = ({
	bookList,
	scrollContainerKey,
}: {
	bookList: TBook[]
	scrollContainerKey: number
}) => {
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

	const setCurrVerseDetailsId = useSetAtom(currVerseDetailsIdAtom)

	const closeMenu = () => setCurrVerseDetailsId(null)

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

	const buildReaderUrl = useBuildReaderUrl()

	return (
		<Portal>
			<Menu.Backdrop />
			<Menu.Positioner>
				<Menu.Content>
					<Flex direction="column" h="inherit" maxH="inherit">
						<Header
							title={`${currBookName} ${chapter}:${staggeredVerseDetails?.verse}`}
							rightButton={
								<Dialog.CloseTrigger
									className={button({ icon: true, size: 'xl' })}
								>
									<Icon size={6} code="&#xe5cd;" />
								</Dialog.CloseTrigger>
							}
						/>
						{!!staggeredVerseDetails?.referenceList && (
							<styled.div
								key={scrollContainerKey}
								overflow="auto"
								overscrollBehavior="contain"
								h="fit-content"
							>
								<CrossReferenceList>
									{staggeredVerseDetails?.referenceList.map((reference) => (
										<li
											className={css({ column: 'content' })}
											key={reference.label}
										>
											<ReferenceLink
												href={buildReaderUrl({
													bookCode: reference.bookCode,
													chapter: reference.chapter,
												})}
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
					</Flex>
				</Menu.Content>
			</Menu.Positioner>
		</Portal>
	)
}
