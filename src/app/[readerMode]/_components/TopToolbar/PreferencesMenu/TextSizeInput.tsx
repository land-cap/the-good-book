import { RadioGroup } from '@ark-ui/react'
import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { center, hstack } from 'styled-system/patterns'

const textSizeOptionList = [
	'Extra small',
	'Small',
	'Medium',
	'Large',
	'Extra large',
] as const

type TTextSizeOption = (typeof textSizeOptionList)[number]

const OptionListContainer = styled('ul', {
	base: hstack.raw({ gap: '0' }),
})

const StyledRadioGroupItem = styled(RadioGroup.Item, {
	base: center.raw({
		h: '10',
		px: '4',
		fontWeight: 'bold',
		lineHeight: '1',
		color: 'fg.subtle',
		'&[data-state=checked]': {
			color: 'fg',
		},
		transition: 'colors',
		transitionDuration: 'fast',
		transitionTimingFunction: 'ease-out',
	}),
	variants: {
		size: {
			'Extra small': {
				fontSize: 'calc(14 / 16 * 1rem)',
			},
			Small: {
				fontSize: 'calc(16 / 16 * 1rem)',
			},
			Medium: {
				fontSize: 'calc(1rem)',
			},
			Large: {
				fontSize: 'calc(17 / 16 * 1rem)',
			},
			'Extra large': {
				fontSize: 'calc(18 / 16 * 1rem)',
			},
		},
	},
})

const TextSizeOption = ({ option }: { option: TTextSizeOption }) => (
	<StyledRadioGroupItem key={option} value={option} size={option}>
		<RadioGroup.ItemText className={css({ zIndex: '1' })}>
			aA
		</RadioGroup.ItemText>
		<RadioGroup.ItemControl />
	</StyledRadioGroupItem>
)

export const TextSizeInput = () => (
	<RadioGroup.Root
		defaultValue="Medium"
		className={hstack({
			justify: 'space-between',
			column: 'content',
		})}
	>
		<RadioGroup.Label>Text Size</RadioGroup.Label>
		<OptionListContainer>
			<RadioGroup.Indicator className={css({ bg: 'bg.subtle' })} />
			{textSizeOptionList.map((option) => (
				<TextSizeOption key={option} option={option} />
			))}
		</OptionListContainer>
	</RadioGroup.Root>
)
