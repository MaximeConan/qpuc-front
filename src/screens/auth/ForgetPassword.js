import React from 'react'
import { Link } from 'react-router-dom'

import Form from '../../components/Form/Form'

import * as Styled from './__styles__/ForgetPassword.styles'

const ForgetPassword = () => {
	const fields = [ { type: 'email', name: 'email', placeholder: 'Adresse email' } ]

	const _onSubmit = (formData) => {
		console.log(formData)
	}

	return (
		<Styled.Root>
			<Styled.TitleContainer>
				<h1>Mot de passe oublié ?</h1>
				<p>
					Une fois connecté, vous aurez accès aux questions,<br /> à votre classement et pourrez ajouter vos
					propres questions !
				</p>
			</Styled.TitleContainer>
			<Styled.FormContainer>
				<Form fields={fields} onSubmit={_onSubmit} buttonLabel="Soumettre" />
			</Styled.FormContainer>
		</Styled.Root>
	)
}

export default ForgetPassword
