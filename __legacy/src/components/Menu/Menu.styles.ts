import { cva } from 'styled-system/css'

export const backdropRecipe = cva({
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
		w: '100dvw',
		h: '100dvh',
		left: 0,
		bottom: 0,
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
	variants: {
		fullscreen: {
			false: {
				h: 'fit-content',
				maxH: 'calc(100dvh * 2 / 3)',
				borderTopWidth: '1px',
				borderColor: 'border',
			},
		},
	},
})
