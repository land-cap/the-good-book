import { useAtom, useSetAtom } from 'jotai'

import { BleedList, SafeAreaBottom } from '~/components'
import { fontAtom, type TFont } from '~/state'

import { FontPreview } from './FontPreview'
import { showFontOptionsAtom } from './preferencesMenu.state'

const fontOptionList = [
	{ value: 'sans', label: 'Sans-serif' },
	{ value: 'serif', label: 'Serif' },
	{ value: 'soft', label: 'Soft' },
	{ value: 'dyslexic', label: 'Dyslexic' },
] satisfies { value: TFont; label: string }[]

export const FontOptions = () => {
	const setShowFontOptions = useSetAtom(showFontOptionsAtom)
	const [font, setFont] = useAtom(fontAtom)

	return (
		<BleedList.Container column="fullbleed" py="4">
			{fontOptionList.map(({ value, label }) => (
				<BleedList.ItemWrapper
					key={value}
					onClick={() => {
						setShowFontOptions(false)
						setFont(value)
					}}
					selected={font === value}
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