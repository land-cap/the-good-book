import { Dialog } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'

import { backdropRecipe, contentRecipe, positionerRecipe } from './Menu.styles'

const createMenu = ({ fullscreen }: { fullscreen: boolean }) => ({
	Backdrop: styled(Dialog.Backdrop, backdropRecipe, {
		defaultProps: { fullscreen },
	}),
	Positioner: styled(Dialog.Positioner, positionerRecipe, {
		defaultProps: { fullscreen },
	}),
	Content: styled(Dialog.Content, contentRecipe, {
		defaultProps: { fullscreen },
	}),
})

export const Menu = createMenu({ fullscreen: false })

export const FullscreenMenu = createMenu({ fullscreen: true })
