import { useThrottle } from '@uidotdev/usehooks'
import { useCallback, useEffect, useState } from 'react'

export const useIsPageScrolled = () => {
	const [scroll, setScroll] = useState<'up' | 'down' | null>(null)

	const throttledScroll = useThrottle(scroll, 500)

	const [lastScroll, setLastScroll] = useState(0)

	const handleScroll = useCallback(() => {
		const currentScroll = window.scrollY
		if (currentScroll <= 0) {
			setScroll('up')
			return
		}

		if (currentScroll > lastScroll && scroll !== 'down') {
			setScroll('down')
		} else if (currentScroll < lastScroll && scroll === 'down') {
			setScroll('up')
		}
		setLastScroll(currentScroll)
	}, [lastScroll, scroll])

	useEffect(
		() => window.addEventListener('scroll', handleScroll),
		[handleScroll],
	)

	return throttledScroll === 'up'
}
