import { useAtom } from 'jotai'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { css, cx } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { button } from 'styled-system/recipes'

import { type TReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import { Icon } from '~/components'
import { referenceOriginChapterAtom } from '~/state'

const buttonCls = cx(
	button({ visual: 'solid', size: 'small', weight: 'regular' }),
	css({
		gap: '1.5',
		alignItems: 'center',
		pos: 'absolute',
		top: '-4',
		right: '0',
		transform: 'translateY(-100%)',
	}),
)

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
	const [origin, setOrigin] = useAtom(referenceOriginChapterAtom)

	const { bookCode, chapter } = useParams<TReaderPageParams>()

	const hasNavigatedToReference =
		bookCode !== origin?.book?.code || Number(chapter) !== origin?.chapter

	if (!origin || !hasNavigatedToReference) return null

	const referenceOriginChapterUrl = `/${origin.book?.code}/${origin.chapter}`
	const bookName = origin.book?.book_name?.value
	const bookAbbr = origin.book?.book_abbreviation?.value

	return (
		<styled.div css={{ animation: 'fadeInBottom 0.25s ease-out' }}>
			<Link
				className={buttonCls}
				href={referenceOriginChapterUrl}
				onClick={() => setOrigin(undefined)}
			>
				<Icon name="undo" size={5} className={iconCls} />
				{bookAbbr}
				{bookAbbr !== bookName ? '.' : null} {origin.chapter}
			</Link>
		</styled.div>
	)
}
