import React, { useState } from 'react'

import Button from '../Button/Button'
import Input from '../Input/Input'

import * as Styled from './__styles__/Form.styles'

const Form = ({ fields, buttonLabel, onSubmit }) => {
	const [ fieldsValue, setFieldsValue ] = useState([])

	const onFormSubmit = (e) => {
		e.preventDefault()
		onSubmit(fieldsValue)
	}

	return (
		<Styled.Root onSubmit={(e) => onFormSubmit(e)}>
			{fields.map((field, index) => {
				const onInputchange = (e) => {
					setFieldsValue({
						...fieldsValue,
						[e.target.name]: { fields: e.target.name, value: e.target.value }
					})
				}

				return (
					<Input
						key={index}
						type={field.type}
						placeholder={field.placeholder}
						name={field.name}
						onChange={(e) => onInputchange(e)}
						spaces={{ bottom: 1 }}
					/>
				)
			})}
			<Button label={buttonLabel} width="100%" onClick={(e) => onFormSubmit(e)} />
		</Styled.Root>
	)
}

export default Form
