import { useAtomValue, useSetAtom } from 'jotai'
import { css, cx } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { square } from 'styled-system/patterns'
import { button } from 'styled-system/recipes'

import { Icon } from '~/components'
import { FontPreview } from '~/organisms/BottomToolbar/PreferencesMenu/FontPreview'
import { fontAtom, type TFont } from '~/state'

import { showFontOptionsAtom } from './preferencesMenu.state'

const fontOptionList = [
	{ value: 'sans', label: 'Sans-serif' },
	{ value: 'serif', label: 'Serif' },
	{ value: 'soft', label: 'Soft' },
	{ value: 'dyslexic', label: 'Dyslexic' },
] satisfies { value: TFont; label: string }[]

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
				<Icon name="navigate_next" size={6} />
			</styled.center>
		</button>
	)
}
