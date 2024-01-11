import { Dialog } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'

export const Positioner_OverlayMenu = styled(Dialog.Positioner, {
	base: {
		bottom: 0,
		h: '100dvh',
		left: 0,
		position: 'fixed',
		w: '100dvw',
	},
})
export const Container_OverlayMenu = styled(Dialog.Content, {
	base: {
		w: '100dvw',
		h: 'full',
		bg: 'bg.canvas',
		'&[data-state=open]': {
			animation: 'fadeInBottom 0.15s ease-out',
		},
		'&[data-state=closed]': {
			animation: 'fadeOutBottom 0.1s ease-in',
		},
	},
})
