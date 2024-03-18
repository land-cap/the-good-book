import { useAtom, useSetAtom } from 'jotai'

import { BleedList, SafeAreaBottom } from '~/components'
import {
	isPreferencesMenuSuspendedAtom,
	showThemeMenuAtom,
	THEME,
	themeAtom,
} from '~/state'

export const themeOptionList = [
	{ value: THEME.Default, label: 'Default' },
	{ value: THEME.Sepia, label: 'Sepia' },
] satisfies { value: THEME; label: string }[]

export const ThemeOptions = () => {
	const setShowThemeMenu = useSetAtom(showThemeMenuAtom)
	const setIsPreferencesMenuSuspended = useSetAtom(
		isPreferencesMenuSuspendedAtom,
	)
	const [theme, setTheme] = useAtom(themeAtom)

	return (
		<BleedList.Container column="fullbleed" py="4">
			{themeOptionList.map(({ value, label }) => (
				<BleedList.ItemWrapper
					key={value}
					onClick={(e) => {
						e.stopPropagation()
						setTheme(value)
						setShowThemeMenu(false)
						setTimeout(() => setIsPreferencesMenuSuspended(false), 150)
					}}
					selected={theme === value}
					fontWeight="regular"
				>
					<BleedList.Item>{label}</BleedList.Item>
				</BleedList.ItemWrapper>
			))}
			<SafeAreaBottom />
		</BleedList.Container>
	)
}
