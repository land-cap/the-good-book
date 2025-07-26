import { cva } from 'styled-system/css'

export const backdropRecipe = cva({
   base: {
      zIndex: 1,
      inset: 0,
      pos: 'fixed',
      bg: 'bg.canvas',
      opacity: 'var(--opacity)',
      forceGpu: true,
      _open: { animation: 'fadeIn 0.3s ease-out' },
      _closed: { animation: 'fadeOut 0.15s ease-in' },
   },
   variants: {
      fullscreen: {
         false: {
            '--opacity': '0.5',
         },
      },
   },
})

export const positionerRecipe = cva({
   base: {
      zIndex: 10,
      pos: 'fixed',
      left: 0,
      bottom: 0,
      w: '100dvw',
      h: '100dvh',
   },
   variants: {
      fullscreen: {
         false: {
            h: 'content',
         },
      },
   },
})

export const contentRecipe = cva({
   base: {
      w: '100dvw',
      h: 'full',
      bg: 'bg.canvas',
      forceGpu: true,
      _open: {
         animation: 'fadeInBottom 0.3s ease-out',
      },
      _closed: {
         animation: 'fadeOutBottom 0.15s ease-in',
      },
   },
   variants: {
      fullscreen: {
         false: {
            borderColor: 'border',
            borderTopWidth: '1px',
            h: 'fit-content',
            maxH: 'calc(100dvh * 2 / 3)',
         },
      },
   },
})
