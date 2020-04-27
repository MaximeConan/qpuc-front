import React from 'react'
import { Link } from 'react-router-dom'

import Form from '../../components/Form/Form'

import * as Styled from './__styles__/SigninPage.styles'

const SigninPage = () => {
	const fields = [
		{ type: 'email', name: 'email', placeholder: 'Adresse email' },
		{ type: 'password', name: 'password', placeholder: 'Mot de passe' }
	]

	const _onSubmit = (formData) => {
		console.log(formData)
	}

	return (
		<Styled.Root>
			<Styled.TitleContainer>
				<h1>Connectez-vous !</h1>
				<p>
					Une fois connecté, vous aurez accès aux questions,<br /> à votre classement et pourrez ajouter vos
					propres questions !
				</p>
			</Styled.TitleContainer>
			<Styled.FormContainer>
				<Form fields={fields} onSubmit={_onSubmit} buttonLabel="Connexion" />
				<p>
					Pas encore de compte ? <Link to="/inscription">Inscrivez-vous</Link>
				</p>
				<p>
					Mot de passe oublié ? <Link to="/mot-de-passe-oublie">Par ici !</Link>
				</p>
			</Styled.FormContainer>
		</Styled.Root>
	)
}

export default SigninPage
