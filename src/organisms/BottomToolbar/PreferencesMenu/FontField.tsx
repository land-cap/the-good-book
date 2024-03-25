import { useAtomValue, useSetAtom } from 'jotai'

import {
	fontAtom,
	isPreferencesMenuSuspendedAtom,
	showFontMenuAtom,
} from '~/state'

import { FontMenuRoot, fontOptionList } from './FontMenu'
import { FontPreview } from './FontPreview'
import { SelectField } from './SelectField'

export const FontField = () => {
	const font = useAtomValue(fontAtom)
	const setShowFontMenu = useSetAtom(showFontMenuAtom)
	const setIsPreferencesMenuSuspended = useSetAtom(
		isPreferencesMenuSuspendedAtom,
	)

	const fontLabel = fontOptionList.find((option) => option.value === font)
		?.label

	return (
		<SelectField.Container>
			<FontMenuRoot />
			<SelectField.Button
				label={
					<FontPreview font={font} lineHeight="1">
						{fontLabel}
					</FontPreview>
				}
				placeholder="Font"
				onClick={(e) => {
					e.preventDefault()
					setIsPreferencesMenuSuspended(true)
					setTimeout(() => setShowFontMenu(true), 150)
				}}
			/>
		</SelectField.Container>
	)
}
