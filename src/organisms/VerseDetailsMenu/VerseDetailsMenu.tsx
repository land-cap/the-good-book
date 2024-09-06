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
import { buildReaderUrl } from '~/app/read/lib'
import { Header, Icon, Menu, SafeAreaBottom } from '~/components'
import { type TBook } from '~/db'
import {
	currBookAtom,
	currVerseDetailsAtom,
	referenceOriginAtom,
	selectedReferenceAtom,
	showVerseDetailsMenuAtom,
	type TCrossReference,
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

export const VerseDetailsMenu = ({ bookList }: { bookList: TBook[] }) => {
	const { bookCode, chapter } = useParams<TReaderPageParams>()

	const [currBookName, setCurrBookName] = useState('')

	useEffect(() => {
		const book = bookList.find((book) => book.code === bookCode)
		const bookName = book?.book_name?.value
		bookName && setCurrBookName(bookName)
	}, [bookCode, bookList])

	const verseDetails = useAtomValue(currVerseDetailsAtom)

	const setShowVerseDetailsMenu = useSetAtom(showVerseDetailsMenuAtom)

	const closeMenu = () => setShowVerseDetailsMenu(false)

	const setReferenceOrigin = useSetAtom(referenceOriginAtom)

	const setSelectedReference = useSetAtom(selectedReferenceAtom)

	const currBook = useAtomValue(currBookAtom)

	const handleReferenceLinkClick = (reference: TCrossReference) => {
		closeMenu()
		setSelectedReference(reference)
		setReferenceOrigin({
			book: currBook,
			chapter: Number(chapter),
			verse: verseDetails?.verse,
		})
	}

	return (
		<Portal>
			<Menu.Backdrop />
			<Menu.Positioner>
				<Menu.Content>
					<Flex direction="column" h="inherit" maxH="inherit">
						<Header
							title={`${currBookName} ${chapter}:${verseDetails?.verse}`}
							rightButton={
								<Dialog.CloseTrigger
									className={button({ icon: true, size: 'xl' })}
								>
									<Icon size={6} code="&#xe5cd;" />
								</Dialog.CloseTrigger>
							}
						/>
						{!!verseDetails?.referenceList && (
							<styled.div
								overflow="auto"
								overscrollBehavior="contain"
								h="fit-content"
							>
								<CrossReferenceList>
									{verseDetails?.referenceList.map((reference) => (
										<li
											className={css({ column: 'content' })}
											key={reference.label}
										>
											<ReferenceLink
												href={buildReaderUrl({
													bookCode: reference.bookCode,
													chapter: reference.chapter,
													verseRange: reference.verseRange,
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
						{!!verseDetails?.footnote && (
							<div className={macrogrid()}>
								<Footnote>{verseDetails?.footnote}</Footnote>
								<SafeAreaBottom css={{ column: 'content' }} />
							</div>
						)}
					</Flex>
				</Menu.Content>
			</Menu.Positioner>
		</Portal>
	)
}
