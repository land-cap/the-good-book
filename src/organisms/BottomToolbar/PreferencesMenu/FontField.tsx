import { useAtomValue, useSetAtom } from 'jotai'

import {
	fontAtom,
	isPreferencesMenuSuspendedAtom,
	showFontMenuAtom,
} from '~/state'

import { FontMenuRoot } from './FontMenu'
import { FontPreview } from './FontPreview'
import { SelectField } from './SelectField'

export const FontField = () => {
	const font = useAtomValue(fontAtom)
	const setShowFontMenu = useSetAtom(showFontMenuAtom)
	const setIsPreferencesMenuSuspended = useSetAtom(
		isPreferencesMenuSuspendedAtom,
	)

	return (
		<SelectField.Container>
			<FontMenuRoot />
			<SelectField.Button
				label={
					<FontPreview font={font} lineHeight="1">
						Font
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
