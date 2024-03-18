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
				onClick={(e) => {
					e.stopPropagation()
					setIsPreferencesMenuSuspended(true)
					setTimeout(() => setShowFontMenu(true), 150)
				}}
			>
				<FontPreview font={font}>Font</FontPreview>
			</SelectField.Button>
		</SelectField.Container>
	)
}
