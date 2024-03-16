import { useAtomValue, useSetAtom } from 'jotai'

import {
	isPreferencesMenuSuspendedAtom,
	showThemeMenuAtom,
	THEME,
	themeAtom,
} from '~/state'

import { SelectField } from './SelectField'

export const themeOptionList = [
	{ value: THEME.Default, label: 'Default' },
	{ value: THEME.Sepia, label: 'Sepia' },
] satisfies { value: THEME; label: string }[]

export const ThemeField = () => {
	const theme = useAtomValue(themeAtom)
	const setShowThemeMenu = useSetAtom(showThemeMenuAtom)
	const setIsPreferencesMenuSuspended = useSetAtom(
		isPreferencesMenuSuspendedAtom,
	)

	const currThemeLabel = themeOptionList.find(
		(option) => option.value === theme,
	)?.label

	return (
		<SelectField.Container>
			<SelectField.Label>Theme</SelectField.Label>
			<SelectField.Button
				onClick={(e) => {
					e.stopPropagation()
					setIsPreferencesMenuSuspended(true)
					setTimeout(() => setShowThemeMenu(true), 150)
				}}
			>
				{currThemeLabel}
			</SelectField.Button>
		</SelectField.Container>
	)
}
