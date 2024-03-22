import { useAtomValue, useSetAtom } from 'jotai'

import {
	isPreferencesMenuSuspendedAtom,
	showThemeMenuAtom,
	themeAtom,
} from '~/state'

import { SelectField } from './SelectField'
import { ThemeMenuRoot } from './ThemeMenu'

export const ThemeField = () => {
	const setShowThemeMenu = useSetAtom(showThemeMenuAtom)
	const setIsPreferencesMenuSuspended = useSetAtom(
		isPreferencesMenuSuspendedAtom,
	)
	const theme = useAtomValue(themeAtom)

	return (
		<SelectField.Container>
			<ThemeMenuRoot />
			<SelectField.Button
				label={theme}
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
