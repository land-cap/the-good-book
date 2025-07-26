import { useSetAtom } from 'jotai'
import { type ReactNode, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { flex } from 'styled-system/patterns'

import { isFooterVisibleAtom } from './footer.state'

export const FooterContainer = ({ children }: { children: ReactNode }) => {
   const { ref, inView } = useInView({ threshold: 0 })

   const setIsFooterVisible = useSetAtom(isFooterVisibleAtom)

   useEffect(() => setIsFooterVisible(inView), [inView, setIsFooterVisible])

   return (
      <footer
         ref={ref}
         className={flex({
            align: 'center',
            w: 'full',
            my: '20',
            mx: 'auto',
            color: 'fg.subtle',
            fontSize: 'xs',
            lineHeight: 'relaxed',
            textAlign: 'center',
            placeContent: 'center',
            column: 'content',
         })}
      >
         {children}
      </footer>
   )
}
