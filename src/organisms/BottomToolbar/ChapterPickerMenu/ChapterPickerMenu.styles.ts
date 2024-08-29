import { Tabs } from '@ark-ui/react'
import Link from 'next/link'
import { styled } from 'styled-system/jsx'
import {
	center,
	flex,
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
