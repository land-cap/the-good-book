import { Dialog, Tabs } from '@ark-ui/react'
import Link from 'next/link'
import { styled } from 'styled-system/jsx'
import { center, flex, macrogrid, subgrid } from 'styled-system/patterns'

export const DialogTrigger = styled(Dialog.Trigger, {
	base: center.raw({
		_active: { bg: 'bg.subtle', color: 'fg.subtle' },
		_canHover: { _hover: { bg: 'bg.subtle' } },
		flexGrow: 1,
		fontWeight: 'bold',
		h: 'full',
		px: '4',
		transition: 'colors',
		transitionDuration: 'fast',
		transitionTimingFunction: 'ease-in-out',
	}),
})

export const DialogPositioner = styled(Dialog.Positioner, {
	base: {
		bottom: 0,
		h: '100dvh',
		left: 0,
		position: 'fixed',
		w: '100dvw',
		willChange: 'transform',
	},
	variants: {
		isDialogOpen: {
			false: {
				transform: 'translate3d(0,100%,0)',
			},
			true: {
				transform: 'translate3d(0,0,0)',
			},
		},
	},
})

export const DialogContainer = styled(Dialog.Content, {
	base: {
		bg: 'bg.canvas',
		h: 'full',
		w: '100dvw',
	},
})

export const TabsRoot = styled(Tabs.Root, {
	base: flex.raw({
		direction: 'column',
		h: 'full',
		overflowY: 'hidden',
	}),
})

export const TabsContent = styled(Tabs.Content, {
	base: {
		'&[data-state=closed]': {
			display: 'none',
		},
		fixStickyContainer: true,
		h: 'full',
		overflowY: 'scroll',
		overscrollBehavior: 'contain',
	},
})

export const BookListContainer = styled('ul', {
	base: macrogrid.raw({
		column: 'fullbleed',
		h: 'fit-content',
	}),
})

export const BookListItemContainer = styled('div', {
	base: subgrid.raw({
		_active: { bg: 'bg.subtle', color: 'fg.subtle' },
		_canHover: { _hover: { bg: 'bg.subtle' } },
		column: 'fullbleed',
		cursor: 'pointer',
		transition: 'colors',
		transitionDuration: 'fastest',
		transitionTimingFunction: 'ease-out',
	}),
	variants: {
		isCurrBook: {
			true: {
				fontWeight: 'bold',
			},
		},
		isFirstEl: {
			true: {
				mt: '4',
			},
		},
	},
})

export const BookListItem = styled('li', {
	base: subgrid.raw({ column: 'content', cursor: 'pointer', py: '4' }),
})

export const ChapterList = styled('ul', {
	base: subgrid.raw({
		column: 'content',
		display: 'grid',
		gridTemplateColumns: 'repeat(5, 1fr)',
		h: 'fit-content',
		md: {
			gridTemplateColumns: 'repeat(10, 1fr)',
		},
	}),
})

export const ChapterListItem = styled('li', {
	base: {
		_active: { bg: 'bg.subtle', color: 'fg.subtle' },
		_canHover: {
			_hover: { bg: 'bg.subtle' },
		},
		aspectRatio: '1/1',
		placeContent: 'center',
		placeItems: 'center',
		position: 'relative',
		transition: 'colors',
		transitionDuration: 'fastest',
		transitionTimingFunction: 'ease-out',
		w: 'full',
	},
	variants: {
		isCurrChapter: {
			true: {
				fontWeight: 'bold',
			},
		},
	},
})

export const ChapterListItemLink = styled(Link, {
	base: center.raw({ inset: 0, position: 'absolute' }),
})
