import { Tabs } from '@ark-ui/react'
import Link from 'next/link'
import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import {
	center,
	flex,
	macrogrid,
	pressable,
	subgrid,
	underlined,
} from 'styled-system/patterns'

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

export const BookListItemContainer = styled('li', {
	base: { ...macrogrid.raw(), ...pressable.raw() },
	variants: {
		isCurrBook: {
			true: underlined.raw({
				fontWeight: 'bold',
			}),
		},
		isFirstEl: {
			true: {
				mt: '4',
			},
		},
	},
})

export const BookListItem = styled('div', {
	base: { column: 'content', cursor: 'pointer', py: '4' },
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
	base: pressable.raw({
		aspectRatio: '1/1',
		placeContent: 'center',
		placeItems: 'center',
		pos: 'relative',
		w: 'full',
	}),
	variants: {
		isCurrChapter: {
			true: underlined.raw({
				fontWeight: 'bold',
			}),
		},
	},
})

export const ChapterListItemLink = styled(Link, {
	base: center.raw({ inset: 0, pos: 'absolute' }),
})
