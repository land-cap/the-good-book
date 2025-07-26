import { tooltipAnatomy } from '@ark-ui/anatomy'
import { Tooltip as ArkTooltip } from '@ark-ui/react'
import { ReactNode } from 'react'
import { sva } from 'styled-system/css'

const tooltipSva = sva({
   className: 'tooltip',
   slots: tooltipAnatomy.keys(),
   base: {
      content: {
         textStyle: 'xs',
         zIndex: 'tooltip',
         maxWidth: '2xs',
         py: '2',
         px: '3',
         color: 'fg',
         fontWeight: 'bold',
         background: 'bg.muted',
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
         <ArkTooltip.Trigger className={classes.trigger}>
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
