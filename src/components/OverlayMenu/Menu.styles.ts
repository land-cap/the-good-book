import { Dialog } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'

const Backdrop = styled(Dialog.Backdrop, {
	base: {
		forceGpu: true,
		pos: 'fixed',
		zIndex: 1,
		inset: 0,
		opacity: 'var(--opacity)',
		bg: 'bg.canvas',
		_open: { animation: 'fadeIn 0.3s ease-out' },
		_closed: { animation: 'fadeOut 0.15s ease-in' },
	},
	variants: {
		opacity: {
			'0': {
				'--opacity': '0',
			},
			'1/4': {
				'--opacity': '0.25',
			},
			'1/3': {
				'--opacity': 'calc(1 / 3)',
			},
			'1/2': {
				'--opacity': '0.5',
			},
			'2/3': {
				'--opacity': 'calc(2 / 3)',
			},
			'3/4': {
				'--opacity': '0.75',
			},
			'1': {
				'--opacity': '1',
			},
		},
	},
	defaultVariants: {
		opacity: '1/2',
	},
})

const Positioner = styled(Dialog.Positioner, {
	base: {
		zIndex: 10,
		pos: 'fixed',
		w: '100dvw',
		h: '100dvh',
		left: 0,
		bottom: 0,
	},
})

const Container = styled(Dialog.Content, {
	base: {
		forceGpu: true,
		w: '100dvw',
		h: 'full',
		bg: 'bg.canvas',
		_open: {
			animation: 'fadeInBottom 0.3s ease-out',
		},
		_closed: {
			animation: 'fadeOutBottom 0.15s ease-in',
		},
	},
})

export const Menu = {
	Backdrop,
	Positioner,
	Container,
}
