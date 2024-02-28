import { AnimatePresence, motion } from 'framer-motion'
import { useAtom, useAtomValue } from 'jotai'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { type MouseEvent, useEffect, useRef, useState } from 'react'
import { css, cx } from 'styled-system/css'
import { hstack } from 'styled-system/patterns'
import { button } from 'styled-system/recipes'

import { type TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import { Icon } from '~/components'
import { referenceOriginAtom, selectedReferenceAtom } from '~/state'

const iconCls = css({
	'--wght': '325',
	ml: '-1',
})

const buttonCls = cx(
	button({ size: 'small', visual: 'solid', weight: 'regular', muted: true }),
	css({
		gap: '1.5',
		alignItems: 'center',
	}),
)

export const ReturnFromReferenceFAB = () => {
	const [origin, setOrigin] = useAtom(referenceOriginAtom)

	const staggeredOrigin = useRef(origin)

	useEffect(() => {
		if (origin) {
			staggeredOrigin.current = origin
		}
	}, [origin])

	const { bookCode, chapter } = useParams<TReaderPageParams>()

	const selectedReference = useAtomValue(selectedReferenceAtom)

	const [hasNavigatedToReference, setHasNavigatedToReference] = useState(false)

	useEffect(() => {
		const hasNavigatedToReference =
			bookCode === selectedReference?.bookCode &&
			Number(chapter) === selectedReference?.chapter
		if (hasNavigatedToReference) {
			setHasNavigatedToReference(true)
		}
	}, [
		bookCode,
		chapter,
		selectedReference?.bookCode,
		selectedReference?.chapter,
	])

	const [hasLeftReference, setHasLeftReference] = useState(false)

	useEffect(() => {
		if (
			hasNavigatedToReference &&
			(bookCode !== selectedReference?.bookCode ||
				Number(chapter) !== selectedReference?.chapter)
		) {
			setHasLeftReference(true)
		}
	}, [
		bookCode,
		chapter,
		hasNavigatedToReference,
		selectedReference?.bookCode,
		selectedReference?.chapter,
	])

	const [hasBeenClicked, setHasBeenClicked] = useState(false)

	useEffect(() => {
		if (origin) {
			setHasLeftReference(false)
			setHasBeenClicked(false)
		}
	}, [origin])

	const show = hasNavigatedToReference && !hasLeftReference && !hasBeenClicked

	const originBookCode = staggeredOrigin.current?.book?.code
	const originBookName = staggeredOrigin.current?.book?.book_name?.value
	const originChapter = staggeredOrigin.current?.chapter
	const originVerse = staggeredOrigin.current?.verse
	const referenceOriginUrl = `/${originBookCode}/${originChapter}${
		originVerse ? `?verse-range=${originVerse}` : ''
	}`

	const router = useRouter()

	const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		router.back()
		setHasBeenClicked(true)
		setOrigin(undefined)
	}

	return (
		<AnimatePresence>
			{show && (
				<motion.div
					initial={{
						opacity: 0,
						transform: 'translateY(0)',
					}}
					animate={{
						opacity: 1,
						transform: 'translateY(-100%)',
						transition: { ease: 'easeOut', duration: 0.3 },
					}}
					exit={{
						opacity: 0,
						transition: { ease: 'easeIn', duration: 0.15 },
					}}
					className={hstack({
						gap: '0',
						pos: 'absolute',
						top: '-4',
						right: '0',
					})}
				>
					<Link
						className={buttonCls}
						href={referenceOriginUrl}
						scroll={false}
						onClick={handleClick}
					>
						<Icon name="undo" size={5} className={iconCls} />
						{originBookName} {originChapter}
						{originVerse ? `:${originVerse}` : ''}
					</Link>
					<div
						className={css({
							h: '8',
							w: '1px',
							bg: 'border.emphasized',
							_osDark: {
								bg: 'border.active',
							},
						})}
					/>
					<button
						className={button({
							size: 'small',
							visual: 'solid',
							icon: true,
							weight: 'regular',
							muted: true,
						})}
						onClick={() => {
							setHasBeenClicked(true)
							setOrigin(undefined)
						}}
					>
						<Icon name="close" size={5} className={css({ '--wght': '325' })} />
					</button>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
