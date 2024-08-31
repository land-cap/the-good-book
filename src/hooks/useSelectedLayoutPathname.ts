import { usePathname, useSelectedLayoutSegments } from 'next/navigation'
import { useMemo } from 'react'

export const useSelectedLayoutPathname = () => {
	const layoutSegments = useSelectedLayoutSegments()

	const pathname = usePathname()

	return useMemo(
		() => pathname.replace(layoutSegments.join('/'), ''),
		[layoutSegments, pathname],
	)
}
