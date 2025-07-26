import { tooltipAnatomy } from '@ark-ui/anatomy'
import { Tooltip as ArkTooltip } from '@ark-ui/react'
import { ReactNode } from 'react'
import { sva } from 'styled-system/css'

const tooltipSva = sva({
   className: 'tooltip',
   slots: tooltipAnatomy.keys(),
   base: {
      content: {
         background: 'bg.muted',
         color: 'fg',
         px: '3',
         py: '2',
         textStyle: 'xs',
         fontWeight: 'bold',
         maxWidth: '2xs',
         zIndex: 'tooltip',
         shadow: 'none',
         _open: {
            animation: 'fadeIn 0.25s ease-out',
         },
         _closed: {
            animation: 'fadeOut 0.2s ease-out',
         },
      },
   },
})

export const Tooltip = ({
   children,
   text,
}: {
   children: ReactNode
   text: string
}) => {
   const classes = tooltipSva()

   return (
      <ArkTooltip.Root>
         <ArkTooltip.Trigger className={classes.trigger} asChild>
            {children}
         </ArkTooltip.Trigger>
         <ArkTooltip.Positioner className={classes.positioner}>
            <ArkTooltip.Content className={classes.content}>
               {text}
            </ArkTooltip.Content>
         </ArkTooltip.Positioner>
      </ArkTooltip.Root>
   )
}
