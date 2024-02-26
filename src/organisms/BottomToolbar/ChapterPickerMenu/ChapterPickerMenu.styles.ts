import { Tabs } from '@ark-ui/react'
import Link from 'next/link'
import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { center, flex, macrogrid, subgrid } from 'styled-system/patterns'

export const TabsRoot = styled(Tabs.Root, {
	base: flex.raw({
		direction: 'column',
		h: 'full',
		overflowY: 'hidden',
	}),
})

export const TabsContent = styled(Tabs.Content, {
	base: {
		h: 'full',
		overflowY: 'scroll',
		overscrollBehavior: 'contain',
		_closed: { display: 'none' },
	},
})

export const BookListContainer = styled('ul', {
	base: css.raw({
		h: 'fit-content',
	}),
})

export const BookListItemContainer = styled('div', {
	base: macrogrid.raw({
		_active: { bg: 'bg.subtle', color: 'fg.subtle' },
		_canHover: { _hover: { bg: 'bg.subtle' } },
		cursor: 'pointer',
		transition: 'colors',
		transitionDuration: 'normal',
		transitionTimingFunction: 'ease-out',
	}),
	variants: {
		isCurrBook: {
			true: {
				fontWeight: 'bold',
				bg: 'bg.subtle',
				_active: { bg: 'bg.muted', color: 'fg.muted' },
				_canHover: { _hover: { bg: 'bg.muted' } },
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
	base: css.raw({ column: 'content', cursor: 'pointer', py: '4' }),
})

export const ChapterList = styled('ul', {
	base: subgrid.raw({
		column: 'content',
		display: 'grid',
		gridTemplateColumns: 'repeat(5, 1fr)',
		h: 'fit-content',
		fontFamily: 'mono',
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
		pos: 'relative',
		transition: 'colors',
		transitionDuration: 'normal',
		transitionTimingFunction: 'ease-out',
		w: 'full',
	},
	variants: {
		isCurrChapter: {
			true: {
				fontWeight: 'bold',
				bg: 'bg.subtle',
				_active: { bg: 'bg.muted', color: 'fg.muted' },
				_canHover: { _hover: { bg: 'bg.muted' } },
			},
		},
	},
})

export const ChapterListItemLink = styled(Link, {
	base: center.raw({ inset: 0, pos: 'absolute' }),
})
