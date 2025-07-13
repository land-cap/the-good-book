import { useAtomValue, useSetAtom } from 'jotai'

import {
	isPreferencesMenuSuspendedAtom,
	showThemeMenuAtom,
	themeAtom,
} from '~/state'

import { SelectField } from './SelectField'
import { ThemeMenuRoot, themeOptionList } from './ThemeMenu'

export const ThemeField = () => {
	const setShowThemeMenu = useSetAtom(showThemeMenuAtom)
	const setIsPreferencesMenuSuspended = useSetAtom(
		isPreferencesMenuSuspendedAtom,
	)
	const theme = useAtomValue(themeAtom)

	const themeLabel = themeOptionList.find((option) => option.value === theme)
		?.label

	return (
		<SelectField.Container>
			<ThemeMenuRoot />
			<SelectField.Button
				label={themeLabel}
				placeholder="Theme"
				onClick={(e) => {
					e.preventDefault()
					setIsPreferencesMenuSuspended(true)
					setTimeout(() => setShowThemeMenu(true), 150)
				}}
			/>
		</SelectField.Container>
	)
}
