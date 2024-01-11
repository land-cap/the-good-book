import { RadioGroup } from '@ark-ui/react'
import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { hstack, vstack } from 'styled-system/patterns'

const leadingOptionList = ['Small', 'Medium', 'Large'] as const

type TLeadingOption = (typeof leadingOptionList)[number]

const OptionListContainer = styled('ul', {
	base: hstack.raw({ gap: '0' }),
})

const PreviewLine = styled('div', {
	base: {
		w: 'full',
		h: '2px',
		bg: 'fg.faded',
	},
})

const OptionPreview = styled('div', {
	base: vstack.raw({
		justify: 'center',
		zIndex: '1',
		h: '10',
		aspectRatio: '4/3',
		px: '3',
		py: '2',
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
			Small: {
				gap: '3px',
			},
			Medium: {
				gap: '5px',
			},
			Large: {
				gap: '7px',
			},
		},
	},
})

const TextSizeOption = ({ option }: { option: TLeadingOption }) => (
	<RadioGroup.Item
		key={option}
		value={option}
		className={css({ w: 'fit-content', h: 'fit-content' })}
	>
		<OptionPreview size={option}>
			<PreviewLine />
			<PreviewLine />
			<PreviewLine />
		</OptionPreview>
		<RadioGroup.ItemControl />
	</RadioGroup.Item>
)

export const LeadingInput = () => (
	<RadioGroup.Root
		defaultValue="Medium"
		className={hstack({
			justify: 'space-between',
			column: 'content',
		})}
	>
		<RadioGroup.Label>Line spacing</RadioGroup.Label>
		<OptionListContainer>
			<RadioGroup.Indicator className={css({ bg: 'bg.subtle' })} />
			{leadingOptionList.map((option) => (
				<TextSizeOption key={option} option={option} />
			))}
		</OptionListContainer>
	</RadioGroup.Root>
)
