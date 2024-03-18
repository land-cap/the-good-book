import { useSetAtom } from 'jotai'

import { isPreferencesMenuSuspendedAtom, showThemeMenuAtom } from '~/state'

import { SelectField } from './SelectField'
import { ThemeMenuRoot } from './ThemeMenu'

export const ThemeField = () => {
	const setShowThemeMenu = useSetAtom(showThemeMenuAtom)
	const setIsPreferencesMenuSuspended = useSetAtom(
		isPreferencesMenuSuspendedAtom,
	)

	return (
		<SelectField.Container>
			<ThemeMenuRoot />
			<SelectField.Button
				onClick={(e) => {
					e.stopPropagation()
					setIsPreferencesMenuSuspended(true)
					setTimeout(() => setShowThemeMenu(true), 150)
				}}
			>
				Theme
			</SelectField.Button>
		</SelectField.Container>
	)
}
