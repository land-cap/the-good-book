import { useAtomValue } from 'jotai/index'

import { isFooterVisibleAtom } from '~/app/[bookCode]/_components/footer.state'
import { useIsPageScrolled } from '~/hooks'

export const useShowCompressedBottomToolbar = () => {
	const isPageScrolled = useIsPageScrolled()

	const isFooterVisible = useAtomValue(isFooterVisibleAtom)

	return isPageScrolled || isFooterVisible
}
