import { Dialog } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'

export const Backdrop_OverlayMenu = styled(Dialog.Backdrop, {
	base: {
		forceGpu: true,
		'--opacity': 'calc(1 / 3)',
		pos: 'fixed',
		zIndex: 1,
		inset: 0,
		opacity: 'var(--opacity)',
		bg: 'bg.inverted',
		_open: { animation: 'fadeIn 0.25s ease-out' },
		_closed: { animation: 'fadeOut 0.2s ease-out' },
	},
})

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
		forceGpu: true,
		w: '100dvw',
		h: 'full',
		bg: 'bg.canvas',
		_open: {
			animation: 'fadeInBottom 0.25s ease-out',
		},
		_closed: {
			animation: 'fadeOutBottom 0.2s ease-in',
		},
	},
})
