import { useAtom, useSetAtom } from 'jotai'

import { BleedList, SafeAreaBottom } from '~/components'
import {
	fontAtom,
	isPreferencesMenuSuspendedAtom,
	showFontOptionsAtom,
	type TFont,
} from '~/state'

import { FontPreview } from '../FontPreview'

export const fontOptionList = [
	{ value: 'sans', label: 'Sans-serif' },
	{ value: 'clean', label: 'Clean' },
	{ value: 'dyslexic', label: 'Dyslexic' },
	{ value: 'condensed', label: 'Condensed' },
	{ value: 'old_style', label: 'Old-style' },
	{ value: 'mono', label: 'Mono-spaced' },
] satisfies { value: TFont; label: string }[]

export const FontOptions = () => {
	const setShowFontOptions = useSetAtom(showFontOptionsAtom)
	const setIsPreferencesMenuSuspended = useSetAtom(
		isPreferencesMenuSuspendedAtom,
	)
	const [font, setFont] = useAtom(fontAtom)

	return (
		<BleedList.Container column="fullbleed" py="4">
			{fontOptionList.map(({ value, label }) => (
				<BleedList.ItemWrapper
					key={value}
					onClick={(e) => {
						e.stopPropagation()
						setFont(value)
						setShowFontOptions(false)
						setTimeout(() => setIsPreferencesMenuSuspended(false), 150)
					}}
					selected={font === value}
					fontWeight="regular"
				>
					<BleedList.Item>
						<FontPreview font={value}>{label}</FontPreview>
					</BleedList.Item>
				</BleedList.ItemWrapper>
			))}
			<SafeAreaBottom />
		</BleedList.Container>
	)
}
