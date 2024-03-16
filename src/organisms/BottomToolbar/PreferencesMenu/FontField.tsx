import { useAtomValue, useSetAtom } from 'jotai'

import {
	fontAtom,
	isPreferencesMenuSuspendedAtom,
	showFontMenuAtom,
} from '~/state'

import { fontOptionList } from './FontOptionsMenu/FontOptions'
import { FontOptionsMenuRoot } from './FontOptionsMenu/FontOptionsMenuRoot'
import { FontPreview } from './FontPreview'
import { SelectField } from './SelectField'

export const FontField = () => {
	const font = useAtomValue(fontAtom)
	const setShowFontMenu = useSetAtom(showFontMenuAtom)
	const setIsPreferencesMenuSuspended = useSetAtom(
		isPreferencesMenuSuspendedAtom,
	)

	const currFontLabel = fontOptionList.find((option) => option.value === font)
		?.label

	return (
		<SelectField.Container>
			<SelectField.Label>Font</SelectField.Label>
			<FontOptionsMenuRoot />
			<SelectField.Button
				onClick={(e) => {
					e.stopPropagation()
					setIsPreferencesMenuSuspended(true)
					setTimeout(() => setShowFontMenu(true), 150)
				}}
			>
				<FontPreview font={font}>{currFontLabel}</FontPreview>
			</SelectField.Button>
		</SelectField.Container>
	)
}
