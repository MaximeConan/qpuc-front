import React from 'react'

import * as Styled from './__styles__/Alert.styles'

const Alert = ({ type, title, description }) => {
	const AlertType = {
		success: Styled.Success,
		failure: Styled.Failure
	}

	const AlertName = AlertType[type]
	return (
		<AlertName>
			<h4>{title}</h4>
			<p>{description}</p>
		</AlertName>
	)
}

export default Alert
