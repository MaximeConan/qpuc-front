import React, { useState } from 'react'
import { isEmpty } from 'lodash'

import Button from '../Button/Button'
import Input from '../Input/Input'

import * as Styled from './__styles__/Form.styles'

const Form = ({ fields, buttonLabel, onSubmit }) => {
	let defaultValues = {}
	fields.map((field) =>
		Object.assign(defaultValues, {
			[field.name]: { name: field.name, value: '', isRequired: field.isRequired ? field.isRequired : false }
		})
	)

	const [ fieldsValue, setFieldsValue ] = useState(defaultValues)
	const [ errors, setErrors ] = useState([])

	const onFormSubmit = (e) => {
		e.preventDefault()

		let generatedErrors = []

		Object.values(fieldsValue).map((field) => {
			if (isEmpty(field.value) && field.isRequired) {
				generatedErrors = [ ...generatedErrors, `Le champs ${field.name} est obligatoire.` ]
			}

			setErrors(generatedErrors)
		})

		isEmpty(errors) && onSubmit(fieldsValue)
	}

	return (
		<Styled.Root onSubmit={(e) => onFormSubmit(e)}>
			{fields.map((field, index) => {
				const onInputchange = (e) => {
					setFieldsValue({
						...fieldsValue,
						[e.target.name]: { fields: e.target.name, value: e.target.value, isRequired: field.isRequired }
					})
				}

				return (
					<Input
						{...field}
						key={index}
						type={field.type}
						placeholder={field.placeholder}
						name={field.name}
						onChange={(e) => onInputchange(e)}
						spaces={{ bottom: 1 }}
					/>
				)
			})}
			{!isEmpty(errors) && (
				<Styled.Error>{errors.map((error, index) => <p key={index}>{error}</p>)}</Styled.Error>
			)}
			<Button label={buttonLabel} width="100%" onClick={(e) => onFormSubmit(e)} />
		</Styled.Root>
	)
}

export default Form
