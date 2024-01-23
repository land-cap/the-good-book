'use client'

import { useSetAtom } from 'jotai'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { isPageBottomReachedAtom } from '~/global.state'

export const PageBottomReference = () => {
	const { ref, inView } = useInView({ threshold: 0 })

	const isPageEndReached = useSetAtom(isPageBottomReachedAtom)

	useEffect(() => isPageEndReached(inView), [inView, isPageEndReached])

	return <div ref={ref} />
}
