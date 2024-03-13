import { useAtomValue, useSetAtom } from 'jotai'
import { css, cx } from 'styled-system/css'
import { Flex, styled } from 'styled-system/jsx'
import { square } from 'styled-system/patterns'
import { button } from 'styled-system/recipes'

import { Icon } from '~/components'
import { FontOptionsMenuRoot } from '~/organisms/BottomToolbar/PreferencesMenu/FontOptionsMenu/FontOptionsMenuRoot'
import { fontAtom, showPreferencesMenu } from '~/state'

import { fontOptionList } from './FontOptionsMenu/FontOptions'
import { FontPreview } from './FontPreview'
import { showFontOptionsAtom } from './preferencesMenu.state'

export const FontField = () => {
	const font = useAtomValue(fontAtom)
	const setShowPreferencesMenu = useSetAtom(showPreferencesMenu)
	const setShowFontOptions = useSetAtom(showFontOptionsAtom)

	const currFontLabel = fontOptionList.find((option) => option.value === font)
		?.label

	return (
		<Flex direction="column" gap="2">
			<styled.label color="fg.subtle" fontSize="sm" lineHeight="1">
				Font
			</styled.label>
			<FontOptionsMenuRoot />
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
					setShowPreferencesMenu(false)
					setTimeout(() => setShowFontOptions(true), 150)
				}}
			>
				<FontPreview font={font}>{currFontLabel}</FontPreview>
				<styled.center className={square({ size: '10' })}>
					<Icon code="&#xe409;" size={6} />
				</styled.center>
			</button>
		</Flex>
	)
}
