import { Tabs } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'
import {
   center,
   flex,
   pressable,
   subgrid,
   underlined,
} from 'styled-system/patterns'

export const TabsRoot = styled(Tabs.Root, {
   base: flex.raw({
      direction: 'column',
      h: 'full',
      overflowY: 'hidden',
   }),
})

export const TabsContent = styled(Tabs.Content, {
   base: {
      h: 'full',
      overscrollBehavior: 'contain',
      overflowY: 'scroll',
      _closed: { display: 'none' },
   },
})

export const ChapterList = styled('ul', {
   base: subgrid.raw({
      display: 'grid',
      h: 'fit-content',
      paddingBottom:
         'calc((var(--list-item-height) - 16px) / 2 + token(spacing.safe_area_bottom))',
      column: 'content',
      gridTemplateColumns: 'repeat(5, 1fr)',
      md: {
         gridTemplateColumns: 'repeat(10, 1fr)',
      },
   }),
})

export const ChapterListItem = styled('li', {
   variants: {
      isCurrChapter: {
         true: underlined.raw({
            fontWeight: 'bold',
         }),
      },
   },
   base: pressable.raw({
      pos: 'relative',
      aspectRatio: '1/1',
      w: 'full',
      placeContent: 'center',
      placeItems: 'center',
   }),
})

export const chapterListItemLinkCls = center({ inset: 0, pos: 'absolute' })
