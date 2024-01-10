import { Tabs } from '@ark-ui/react'
import Link from 'next/link'
import { styled } from 'styled-system/jsx'
import { center, flex, macrogrid, subgrid } from 'styled-system/patterns'

export const DialogTrigger = styled('button', {
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

export const DialogPositioner = styled('div', {
	base: {
		bottom: 0,
		h: '100dvh',
		left: 0,
		position: 'fixed',
		w: '100dvw',
	},
})

export const DialogContainer = styled('div', {
	base: {
		bg: 'bg.canvas',
		h: 'full',
		w: '100dvw',
		'&[data-state=open]': {
			animation: 'fadeInBottom 0.15s ease-out',
		},
		'&[data-state=closed]': {
			animation: 'fadeOutBottom 0.1s ease-in',
		},
	},
})

export const DialogCloseTrigger = styled('button', {
	base: center.raw({
		_active: { bg: 'bg.subtle', color: 'fg.subtle' },
		_canHover: { _hover: { bg: 'bg.subtle' } },
		color: 'fg.muted',
		h: '14',
		transition: 'colors',
		transitionDuration: 'fast',
		transitionTimingFunction: 'ease-out',
		w: '14',
	}),
})

export const TabsTrigger = styled(Tabs.Trigger, {
	base: {
		'&:not([data-selected])': {
			color: 'fg.faded',
		},
		_active: { bg: 'bg.subtle', color: 'fg.subtle' },
		_canHover: { _hover: { bg: 'bg.subtle' } },
		fontWeight: 'bold',
		h: 'full',
		px: '4',
		transition: 'colors',
		transitionDuration: 'fast',
		transitionTimingFunction: 'ease-out',
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
		'&[data-state=open]': {
			animation: 'fadeIn 0.25s ease',
		},
		'&[data-state=closed]': {
			animation: 'fadeOut 0.25s ease',
			display: 'none',
		},
		forceGpu: true,
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
