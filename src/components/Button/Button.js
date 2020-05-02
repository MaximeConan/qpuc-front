import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { PRIMARY } from '../../enums/buttonTypes'

import * as Styled from './__styles__/Button.styles'

const Button = forwardRef(({ type, width, label, spaces, children, onClick }, ref) => {
	const ButtonType = {
		primary: Styled.Primary,
		secondary: Styled.Secondary
	}

	const ButtonName = ButtonType[type]
	return (
		<ButtonName width={width} onClick={onClick} ref={ref} spaces={spaces}>
			{children ? children : label}
		</ButtonName>
	)
})

Button.propTypes = {
	type: PropTypes.string,
	width: PropTypes.string,
	label: PropTypes.string,
	spaces: PropTypes.object,
	onClick: PropTypes.func
}

Button.defaultProps = {
	type: PRIMARY,
	width: 'auto',
	label: 'Bouton',
	spaces: {
		top: 0,
		bottom: 1,
		left: 0,
		right: 0
	},
	onClick: null
}

export default Button
