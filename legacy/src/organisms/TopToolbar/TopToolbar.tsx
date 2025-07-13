import { styled } from 'styled-system/jsx'

import { PreferencesMenuRoot } from '~/organisms/BottomToolbar/PreferencesMenu'

import { TopToolbarContainer } from './TopToolbarContainer'

const Logo = styled('span', {
	base: { fontWeight: 'bold' },
})

export const TopToolbar = () => {
	return (
		<TopToolbarContainer>
			<Logo>The Good Book</Logo>
			<PreferencesMenuRoot />
		</TopToolbarContainer>
	)
}
