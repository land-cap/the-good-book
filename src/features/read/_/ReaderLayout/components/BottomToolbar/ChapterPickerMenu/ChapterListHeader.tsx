import { type ReactNode } from 'react'
import { caption } from 'styled-system/patterns'

import { Separator } from '~/ui/shared'

export const ChapterListHeader = ({
   children,
   chapterListItemHeight,
}: {
   children: ReactNode
   chapterListItemHeight: number
}) => {
   const marginBottom = (chapterListItemHeight - 16) / 2

   return (
      <div
         className={caption({
            zIndex: '1',
            pos: 'sticky',
            top: '0',
            bg: 'bg.canvas',
            column: '1 / -1',
         })}
         style={{ marginBottom }}
      >
         <div
            className={caption({
               py: '4',
            })}
         >
            {children}
         </div>
         <Separator />
      </div>
   )
}
