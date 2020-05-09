import React, { Fragment } from 'react'

import Nav from '../Nav/Nav'

import * as Styled from './__styles__/MainContainer.styles'

const Main = ({ children }) => {
	return (
		<Fragment>
			<Nav />
			{children}
		</Fragment>
	)
}

export default Main
