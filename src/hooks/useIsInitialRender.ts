import { useEffect, useState } from 'react'

export const useIsInitialRender = () => {
	const [isInitialRender, setIsInitialRender] = useState(true)

	useEffect(() => {
		isInitialRender && setIsInitialRender(false)
	}, [isInitialRender])

	return isInitialRender
}
