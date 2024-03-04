import { useAtom } from 'jotai'
import { css, cx } from 'styled-system/css'
import { button } from 'styled-system/recipes'

import { Icon } from '~/components'
import { fontAtom, type TFont } from '~/state'

export type TSelectOption = { value: string; label: string }

const fontOptionList = [
	{ value: 'sans', label: 'Sans-serif' },
	{ value: 'serif', label: 'Serif' },
	{ value: 'soft', label: 'Soft' },
	{ value: 'dyslexic', label: 'Dyslexic' },
] satisfies { value: TFont; label: string }[]

const buttonCls = (isSelected: boolean) =>
	cx(
		button({
			icon: true,
			visual: 'solid',
			weight: isSelected ? 'bold' : 'regular',
		}),
		css({
			flexGrow: 1,
			h: '10',
		}),
	)

export const FontField = () => {
	const [font, setFont] = useAtom(fontAtom)

	return (
		<div
			className={cx(
				button({ size: 'md', border: true }),
				css({
					w: 'full',
					gap: '4',
					justifyContent: 'space-between',
					alignItems: 'center',
					fontWeight: 'regular',
				}),
			)}
			role="button"
		>
			{fontOptionList.find((option) => option.value === font)?.label}
			<Icon
				name="navigate_next"
				size={6}
				className={css({
					mx: '-2.5',
				})}
			/>
		</div>
	)
}
