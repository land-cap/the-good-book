import { Dialog, Tabs } from '@ark-ui/react'
import { useSetAtom } from 'jotai'
import { css, cx } from 'styled-system/css'
import { hstack, macrogrid } from 'styled-system/patterns'
import { button } from 'styled-system/recipes'

import { Icon, Separator } from '~/ui/shared'

import {
   activeTabAtom,
   type TChapterPickerTab,
} from './chapterPickerMenu.state'

const tabsTriggerCls = cx(
   button({ size: 'xl' }),
   css({
      h: 'full',
      fontWeight: 'bold',
      '&:not([data-selected])': {
         color: 'fg.faded',
      },
   }),
)

export const Header = () => {
   const setActiveTab = useSetAtom(activeTabAtom)

   const handleClickTabTrigger = (tab: TChapterPickerTab) => {
      setActiveTab(tab)
   }

   return (
      <div className={macrogrid()}>
         <div className={css({ column: 'content' })}>
            <div className={hstack({ justify: 'space-between', h: '14' })}>
               <Tabs.List className={hstack({ gap: '0', h: 'full' })}>
                  <Tabs.Trigger
                     className={tabsTriggerCls}
                     value="book"
                     onClick={() => handleClickTabTrigger('book')}
                  >
                     Book
                  </Tabs.Trigger>
                  <Tabs.Trigger
                     className={tabsTriggerCls}
                     value="chapter"
                     onClick={() => handleClickTabTrigger('chapter')}
                  >
                     Chapter
                  </Tabs.Trigger>
               </Tabs.List>
               <Dialog.CloseTrigger
                  className={button({ icon: true, size: 'xl' })}
               >
                  <Icon size={6} name="close" />
               </Dialog.CloseTrigger>
            </div>
         </div>
         <Separator css={{ column: 'content' }} />
      </div>
   )
}
