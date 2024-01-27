import { styled } from 'styled-system/jsx'

import { TopToolbarContainer } from './TopToolbarContainer'

const Logo = styled('span', {
	base: { fontWeight: 'bold' },
})

export const TopToolbar = () => {
	return (
		<TopToolbarContainer>
			<Logo>The Good Book</Logo>
		</TopToolbarContainer>
	)
}
