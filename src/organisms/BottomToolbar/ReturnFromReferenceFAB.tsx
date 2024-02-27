import { AnimatePresence, motion } from 'framer-motion'
import { useAtom, useAtomValue } from 'jotai'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { css, cx } from 'styled-system/css'
import { button } from 'styled-system/recipes'

import { type TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import { Icon } from '~/components'
import { referenceOriginAtom, selectedReferenceAtom } from '~/state'

const iconCls = css({
	'--wght': '325',
	ml: '-1',
	transition: 'colors',
	transitionDuration: 'fast',
	transitionTimingFunction: 'ease-out',
})

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

	const buttonCls = cx(
		button({ size: 'small', visual: 'solid', weight: 'regular', subtle: true }),
		css({
			gap: '1.5',
			alignItems: 'center',
		}),
	)

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
					className={css({
						pos: 'absolute',
						top: '-4',
						right: '0',
					})}
				>
					<Link
						className={buttonCls}
						href={referenceOriginUrl}
						onClick={() => {
							setHasBeenClicked(true)
							setOrigin(undefined)
						}}
					>
						<Icon name="undo" size={5} className={iconCls} />
						{originBookName} {originChapter}
						{originVerse ? `:${originVerse}` : ''}
					</Link>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
