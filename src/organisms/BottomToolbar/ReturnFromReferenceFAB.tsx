import { useAtom } from 'jotai'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { css, cx } from 'styled-system/css'
import { button } from 'styled-system/recipes'

import { type TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import { Icon } from '~/components'
import { referenceOriginAtom } from '~/state'

const iconCls = css({
	'--wght': '325',
	ml: '-1',
	_active: { color: 'fg' },
	_canHover: { _hover: { color: 'fg' } },
	transition: 'colors',
	transitionDuration: 'fast',
	transitionTimingFunction: 'ease-out',
})

export const ReturnFromReferenceFAB = () => {
	const [origin, setOrigin] = useAtom(referenceOriginAtom)

	const staggeredOrigin = useRef(origin)

	useEffect(() => {
		staggeredOrigin.current = origin
	}, [origin])

	const { bookCode, chapter } = useParams<TReaderPageParams>()

	const hasNavigatedToReference =
		bookCode !== origin?.book?.code || Number(chapter) !== origin?.chapter

	const show = origin && hasNavigatedToReference

	const referenceOriginChapterUrl = `/${staggeredOrigin.current?.book?.code}/${staggeredOrigin.current?.chapter}`
	const bookName = staggeredOrigin.current?.book?.book_name?.value
	const bookAbbr = staggeredOrigin.current?.book?.book_abbreviation?.value

	const buttonCls = cx(
		button({ visual: 'solid', size: 'small', weight: 'regular' }),
		css({
			gap: '1.5',
			alignItems: 'center',
			pos: 'absolute',
			top: '-4',
			opacity: show ? '1' : '0',
			right: '0',
			transform: show ? 'translateY(-100%)' : 'translateY(0)',
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
			{bookAbbr}
			{bookAbbr !== bookName ? '.' : null} {staggeredOrigin.current?.chapter}
		</Link>
	)
}
