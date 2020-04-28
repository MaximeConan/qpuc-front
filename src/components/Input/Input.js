import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './__styles__/Input.styles'

const Input = ({ type, placeholder, name, onChange, spaces }) => {
	console.log(spaces)
	return <Styled.Input type={type} placeholder={placeholder} name={name} onChange={onChange} spaces={spaces} />
}

Input.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	spaces: PropTypes.object,
	onChange: PropTypes.func.isRequired
}

Input.defaultProps = {
	type: 'text',
	placeholder: 'Complétez de champs',
	name: null,
	spaces: {
		top: 0,
		bottom: 1,
		left: 0,
		right: 0
	},
	onChange: null
}

export default Input
