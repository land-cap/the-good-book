import { Tabs } from '@ark-ui/react'
import Link from 'next/link'
import { styled } from 'styled-system/jsx'
import { center, flex, macrogrid, subgrid } from 'styled-system/patterns'

export const OverlayPositioner = styled('div', {
	base: {
		inset: '0',
		position: 'fixed',
	},
})

export const OverlayContainer = styled('div', {
	base: {
		bg: 'bg.canvas',
		h: 'full',
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
	},
})

export const BookListItemContainer = styled('div', {
	base: subgrid.raw({
		_active: { bg: 'bg.subtle', color: 'fg.subtle' },
		_canHover: { _hover: { bg: 'bg.subtle' }, transitionDelay: 'fastest' },
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

export const BookListContainer = styled('ul', {
	base: macrogrid.raw({
		gridColumn: 'fullbleed',
		h: 'fit-content',
	}),
})

export const BookListItem = styled('li', {
	base: subgrid.raw({ column: 'content', py: '4' }),
})

export const ChapterList = styled('ul', {
	base: subgrid.raw({
		display: 'grid',
		gridColumn: 'content',
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
			transitionDelay: 'fastest',
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
