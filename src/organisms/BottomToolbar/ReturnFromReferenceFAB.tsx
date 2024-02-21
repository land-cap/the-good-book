import { useAtomValue } from 'jotai'
import { css, cx } from 'styled-system/css'
import { button } from 'styled-system/recipes'

import { Icon } from '~/components'
import { referenceOriginChapterAtom } from '~/state'

const buttonCls = cx(
	button({ visual: 'solid', size: 'small', weight: 'regular' }),
	css({
		display: 'inline-flex',
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
	ml: '-0.5',
	_active: { color: 'fg' },
	_canHover: { _hover: { color: 'fg' } },
	transition: 'colors',
	transitionDuration: 'fast',
	transitionTimingFunction: 'ease-out',
})

export const ReturnFromReferenceFAB = () => {
	const referenceOriginChapter = useAtomValue(referenceOriginChapterAtom)

	if (!referenceOriginChapter) return null

	const referenceOriginChapterUrl = `/${referenceOriginChapter.book?.code}/${referenceOriginChapter.chapter}`

	return (
		<a className={buttonCls} href={referenceOriginChapterUrl}>
			<Icon name="undo" size={5} className={iconCls} />
			{referenceOriginChapter.book?.book_abbreviation?.value}.{' '}
			{referenceOriginChapter.chapter}
		</a>
	)
}
