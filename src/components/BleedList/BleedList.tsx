import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { macrogrid, pressable, underlined } from 'styled-system/patterns'

export const Container = styled('ul', {
	base: css.raw({
		h: 'fit-content',
	}),
})

export const ItemWrapper = styled('li', {
	base: { ...macrogrid.raw(), ...pressable.raw() },
	variants: {
		selected: {
			true: underlined.raw({
				fontWeight: 'bold',
			}),
		},
	},
})

export const Item = styled('div', {
	base: { column: 'content', cursor: 'pointer', py: '4' },
})

export const BleedList = {
	Container,
	ItemWrapper,
	Item,
}
