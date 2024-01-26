import { useWindowEvent } from '@mantine/hooks'
import { useThrottle } from '@uidotdev/usehooks'
import { useCallback, useState } from 'react'

export const useIsPageScrolled = () => {
	const [scroll, setScroll] = useState<'up' | 'down'>('up')

	const throttledScroll = useThrottle(scroll, 250)

	const [lastScroll, setLastScroll] = useState(0)

	const throttledLastScroll = useThrottle(lastScroll, 250)

	const handleScroll = useCallback(() => {
		const currentScroll = window.scrollY

		if (currentScroll > 0 && currentScroll > throttledLastScroll) {
			setScroll('down')
		} else {
			setScroll('up')
		}
		setLastScroll(currentScroll)
	}, [throttledLastScroll])

	useWindowEvent('scroll', handleScroll)

	return throttledScroll === 'up'
}
