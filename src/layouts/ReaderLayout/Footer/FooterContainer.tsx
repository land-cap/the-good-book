'use client'

import { useSetAtom } from 'jotai'
import { type ReactNode, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { flex } from 'styled-system/patterns'

import { isFooterVisibleAtom } from './footer.state'

export const FooterContainer = ({ children }: { children: ReactNode }) => {
	const { ref, inView } = useInView({ threshold: 0 })

	const setIsFooterVisible = useSetAtom(isFooterVisibleAtom)

	useEffect(() => setIsFooterVisible(inView), [inView, setIsFooterVisible])

	return (
		<footer
			ref={ref}
			className={flex({
				align: 'center',
				color: 'fg.subtle',
				column: 'content',
				fontSize: 'xs',
				lineHeight: 'relaxed',
				mx: 'auto',
				my: '14',
				placeContent: 'center',
				textAlign: 'center',
				w: 'full',
				sm: { my: '20' },
			})}
		>
			{children}
		</footer>
	)
}
