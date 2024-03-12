import { useAtomValue, useSetAtom } from 'jotai'
import { css, cx } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { square } from 'styled-system/patterns'
import { button } from 'styled-system/recipes'

import { Icon } from '~/components'
import { fontAtom } from '~/state'

import { fontOptionList } from './FontOptions'
import { FontPreview } from './FontPreview'
import { showFontOptionsAtom } from './preferencesMenu.state'

export const FontField = () => {
	const font = useAtomValue(fontAtom)

	const setShowFontOptions = useSetAtom(showFontOptionsAtom)

	const currFontLabel = fontOptionList.find((option) => option.value === font)
		?.label

	return (
		<button
			className={cx(
				button({ size: 'md', border: true }),
				css({
					w: 'full',
					gap: '4',
					justifyContent: 'space-between',
					alignItems: 'center',
					fontWeight: 'regular',
					pr: '0',
				}),
			)}
			onClick={(e) => {
				e.stopPropagation()
				setShowFontOptions(true)
			}}
		>
			<FontPreview font={font}>{currFontLabel}</FontPreview>
			<styled.center className={square({ size: '10' })}>
				<Icon code="&#xe409;" size={6} />
			</styled.center>
		</button>
	)
}
