import { usePrevious } from '@mantine/hooks'
import { useAtom } from 'jotai'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { css, cx } from 'styled-system/css'
import { button } from 'styled-system/recipes'

import { type TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import { Icon } from '~/components'
import { referenceOriginAtom } from '~/state'

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

	const [hasNavigatedToReference, setHasNavigatedToReference] = useState(false)

	useEffect(() => {
		const hasNavigatedToReference =
			bookCode !== origin?.book?.code || Number(chapter) !== origin?.chapter
		setHasNavigatedToReference(hasNavigatedToReference)
	}, [bookCode, chapter, origin?.book?.code, origin?.chapter])

	const [hasLeftReference, setHasLeftReference] = useState(false)

	const prevBookCode = usePrevious(bookCode)
	const prevChapter = usePrevious(chapter)

	useEffect(() => {
		if (
			hasNavigatedToReference &&
			(prevBookCode !== bookCode || prevChapter !== chapter)
		) {
			setHasLeftReference(true)
		}
	}, [bookCode, chapter, hasNavigatedToReference, prevBookCode, prevChapter])

	useEffect(() => setHasLeftReference(false), [origin])

	const show = origin && hasNavigatedToReference && !hasLeftReference

	const referenceOriginChapterUrl = `/${staggeredOrigin.current?.book?.code}/${staggeredOrigin.current?.chapter}`
	const bookName = staggeredOrigin.current?.book?.book_name?.value

	const buttonCls = cx(
		button({ size: 'small', border: true, weight: 'regular', subtle: true }),
		css({
			gap: '1.5',
			alignItems: 'center',
			pos: 'absolute',
			top: '-4',
			right: '0',
			transform: show ? 'translateY(-100%)' : 'translateY(0)',
			opacity: show ? '1' : '0',
			transition: 'all',
			transitionDuration: show ? 'normal' : 'fast',
			transitionTimingFunction: show ? 'ease-out' : 'ease-in',
		}),
	)

	return (
		<Link
			className={buttonCls}
			href={referenceOriginChapterUrl}
			onClick={() => setOrigin(undefined)}
		>
			<Icon name="undo" size={5} className={iconCls} />
			{bookName} {staggeredOrigin.current?.chapter}
		</Link>
	)
}
