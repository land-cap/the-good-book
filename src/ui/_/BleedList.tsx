import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { macrogrid, pressable, underlined } from 'styled-system/patterns'

export const Container = styled('ul', {
   base: css.raw({
      h: 'fit-content',
   }),
})

export const ItemWrapper = styled('li', {
   variants: {
      selected: {
         true: underlined.raw({
            fontWeight: 'bold',
         }),
      },
   },
   base: { ...macrogrid.raw(), ...pressable.raw() },
})

export const Item = styled('div', {
   base: { cursor: 'pointer', py: '4', column: 'content' },
})

export const BleedList = {
   Container,
   ItemWrapper,
   Item,
}
