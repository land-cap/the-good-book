import { Dialog } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'

export const Positioner_OverlayMenu = styled(Dialog.Positioner, {
	base: {
		zIndex: 10,
		position: 'fixed',
		w: '100dvw',
		h: '100dvh',
		left: 0,
		bottom: 0,
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
