'use client'

import { useAtomValue } from 'jotai/index'
import { useLockedBody } from 'usehooks-ts'

import { isScrollLockedAtom } from '~/state'

export const UseLockBodyScroll = () => {
	const isBodyScrollLocked = useAtomValue(isScrollLockedAtom)
	useLockedBody(isBodyScrollLocked)

	return null
}
