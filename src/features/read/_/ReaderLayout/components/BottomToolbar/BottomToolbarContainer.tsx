import { type ReactNode } from 'react'
import { css } from 'styled-system/css'
import { macrogrid } from 'styled-system/patterns'

import { Separator } from '~/ui/shared'

export const BottomToolbarContainer = ({
   children,
}: {
   children: ReactNode
}) => (
   <nav
      className={macrogrid({
         pos: 'fixed',
         bottom: '0',
         w: 'full',
         bg: 'bg.canvas',
         transition: 'all',
         transitionTimingFunction: 'ease-in-out',
         transitionDuration: 'normal',
         willChange: 'bottom, opacity',
         column: 'fullbleed',
         forceGpu: true,
      })}
   >
      <Separator className={css({ column: 'content' })} />
      {children}
   </nav>
)
