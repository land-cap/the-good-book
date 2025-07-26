import { defineRecipe } from '@pandacss/dev'

export const buttonRecipe = defineRecipe({
   className: 'button',
   base: {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      lineHeight: 'normal',
      transition: 'colors',
      transitionTimingFunction: 'ease-out',
      transitionDuration: 'fast',
      '& *': {
         transition: 'colors',
         transitionTimingFunction: 'inherit',
         transitionDuration: 'inherit',
      },
      '&[aria-disabled=true]': {
         pointerEvents: 'none',
      },
   },

   variants: {
      visual: {
         ghost: {
            bg: 'bg.canvas',
            _active: { color: 'fg.subtle', bg: 'bg.subtle' },
            _canHover: { _hover: { bg: 'bg.subtle' } },
            '&[aria-disabled=true]': {
               color: 'fg.moreFaded',
            },
         },
         solid: {
            bg: 'bg.muted',
            _disabled: {
               color: 'fg.faded',
            },
            _active: { color: 'fg.subtle', bg: 'bg.more_muted' },
            _canHover: { _hover: { bg: 'bg.more_muted' } },
         },
      },
      border: {
         true: {
            borderColor: 'border',
            borderWidth: '1px',
            _active: { borderColor: 'fg' },
            _canHover: { _hover: { borderColor: 'fg' } },
         },
      },
      muted: {
         true: {
            color: 'fg.muted',
            _active: { color: 'fg' },
         },
      },
      size: {
         sm: {
            h: '8',
            px: '3',
            fontSize: 'xs',
         },
         md: {
            h: '10',
            px: '4',
         },
         lg: {
            h: '12',
            px: '4',
         },
         xl: {
            h: '14',
            px: '4',
         },
      },
      icon: {
         true: {
            aspectRatio: 'square',
            px: '0',
         },
      },
      weight: {
         regular: {
            fontWeight: 'regular',
         },
         bold: {
            fontWeight: 'bold',
         },
      },
   },

   defaultVariants: {
      visual: 'ghost',
      size: 'lg',
      weight: 'bold',
   },
   compoundVariants: [
      {
         visual: 'solid',
         muted: true,
         css: {
            _active: { color: 'fg' },
         },
      },
   ],
})
