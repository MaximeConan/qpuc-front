import React from 'react'

import * as Styled from './__styles__/GlobalContainer.styles'

const GlobalContainer = ({ children }) => {
	return <Styled.Root>{children}</Styled.Root>
}

export default GlobalContainer
