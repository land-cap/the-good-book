import { Dialog, DialogRootProps } from '@ark-ui/react'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { css, cx } from 'styled-system/css'
import { button } from 'styled-system/recipes'

import { bookAtom, chapterAtom } from '../../bottomToolbar.state'
import { ChapterPickerMenu } from './ChapterPickerMenu'
import {
   activeTabAtom,
   selectedBookIdAtom,
   showChapterPickerMenu,
} from './chapterPickerMenu.state'

const triggerCls = cx(button(), css({ h: 'full', flexGrow: 1 }))

export const ChapterPickerMenuRoot = () => {
   const [showMenu, setShowMenu] = useAtom(showChapterPickerMenu)
   const setTab = useSetAtom(activeTabAtom)
   const currChapter = useAtomValue(chapterAtom)
   const currBook = useAtomValue(bookAtom)
   const setSelectedBookId = useSetAtom(selectedBookIdAtom)

   const handleDialogExitComplete = () => {
      setTab('book')
   }

   const handleOpenChange: DialogRootProps['onOpenChange'] = ({ open }) => {
      setShowMenu(open)
      if (open) {
         setSelectedBookId(currBook.id)
      }
   }

   const triggerLabel = `${currBook.book_name!.value} ${currChapter}`

   return (
      <Dialog.Root
         id="chapter-picker-menu"
         trapFocus
         lazyMount
         open={showMenu}
         onOpenChange={handleOpenChange}
         onExitComplete={handleDialogExitComplete}
      >
         <Dialog.Trigger
            className={triggerCls}
            onClick={() => setShowMenu(true)}
         >
            {triggerLabel}
         </Dialog.Trigger>
         <ChapterPickerMenu />
      </Dialog.Root>
   )
}
