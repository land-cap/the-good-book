'use client'

import { Dialog, Portal } from '@ark-ui/react'
import { useAtomValue, useSetAtom } from 'jotai'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { css } from 'styled-system/css'
import { Flex, styled } from 'styled-system/jsx'
import { macrogrid, underlined } from 'styled-system/patterns'
import { button } from 'styled-system/recipes'

import { type TReaderPageParams } from '~/_pages'
import { Header, Icon, Menu, SafeAreaBottom } from '~/components'
import { getBookWithCache, type TBook } from '~/db'
import {
	currVerseDetailsAtom,
	currVerseDetailsIDAtom,
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

const FadeOverlay = styled('div', {
	base: {
		zIndex: '1',
		overflow: 'visible',
		pos: 'sticky',
		h: '0',
		w: 'full',
		_before: {
			content: '""',
			pointerEvents: 'none',
			zIndex: '1',
			pos: 'absolute',
			h: 'calc(token(spacing.20) + token(spacing.safe_area_bottom))',
			w: 'full',
			transition: 'opacity',
			transitionDuration: 'normal',
			transitionTimingFunction: 'ease-out',
		},
	},
	variants: {
		position: {
			start: {
				top: '0',
				_after: { fadeGradient: 'toTop' },
			},
			end: {
				bottom: '0',
				_before: { fadeGradient: 'toBottom' },
			},
		},
		show: {
			true: {
				opacity: '1',
			},
			false: {
				opacity: '0',
			},
		},
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

	const scrollContainerRef = useRef<HTMLDivElement>(null)

	const { ref: topRef, inView: isTopInView } = useInView({
		root: scrollContainerRef.current,
	})

	const { ref: bottomRef, inView: isBottomInView } = useInView({
		root: scrollContainerRef.current,
	})

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
								ref={scrollContainerRef}
								pos="relative"
								key={scrollContainerKey}
								overflow="auto"
								overscrollBehavior="contain"
								h="fit-content"
							>
								<FadeOverlay position="start" show={!isTopInView} />
								<styled.div ref={topRef} css={{ w: 'full' }} />
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
								<FadeOverlay position="end" show={!isBottomInView} />
								<styled.div ref={bottomRef} css={{ w: 'full' }} />
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
