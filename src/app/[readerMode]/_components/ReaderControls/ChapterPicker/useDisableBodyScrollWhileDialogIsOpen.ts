import { useEffect } from 'react'

export const useDisableBodyScrollWhileDialogIsOpen = ({
	isDialogOpen,
}: {
	isDialogOpen: boolean
}) =>
	useEffect(() => {
		if (isDialogOpen) {
			document.body.style.overflow = 'clip'
		} else {
			document.body.style.overflow = 'auto'
		}
	}, [isDialogOpen])
