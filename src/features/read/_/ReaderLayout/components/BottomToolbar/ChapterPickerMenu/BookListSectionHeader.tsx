import { type ReactNode } from 'react'
import { css } from 'styled-system/css'
import { caption, macrogrid } from 'styled-system/patterns'

import { Separator } from '~/ui/shared'

export const BookListSectionHeader = ({
   children,
}: {
   children: ReactNode
}) => (
   <div
      className={macrogrid({
         pos: 'sticky',
         top: '0',
         bg: 'bg.canvas',
      })}
   >
      <div className={css({ column: 'content' })}>
         <div
            className={caption({
               py: '4',
            })}
         >
            {children}
         </div>
         <Separator />
      </div>
   </div>
)
