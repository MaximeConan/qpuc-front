import React from 'react'
import { Link } from 'react-router-dom'

import Form from '../../components/Form/Form'

import * as Styled from './__styles__/SignupPage.styles'

const SignupPage = () => {
	const fields = [
		{ type: 'email', name: 'email', placeholder: 'Adresse email' },
		{ type: 'text', name: 'pseudo', placeholder: 'Ton prénom ou pseudo favoris' },
		{ type: 'number', name: 'age', placeholder: 'Âge' },
		{ type: 'password', name: 'password', placeholder: 'Mot de passe' },
		{ type: 'password', name: 'passwordConfirm', placeholder: 'Confirmation de mot de passe' }
	]

	const _onSubmit = (formData) => {
		console.log(formData)
	}

	return (
		<Styled.Root>
			<Styled.TitleContainer>
				<h1>Inscrivez-vous !</h1>
				<p>
					Une fois inscrit, vous aurez accès aux questions,<br /> à votre classement et pourrez ajouter vos
					propres questions !
				</p>
			</Styled.TitleContainer>
			<Styled.FormContainer>
				<Form fields={fields} onSubmit={_onSubmit} buttonLabel="Inscription" />
				<p>
					Déjà inscrit ? <Link to="/connexion">Connectez-vous</Link>
				</p>
				<p>
					Mot de passe oublié ? <Link to="/mot-de-passe-oublie">Par ici !</Link>
				</p>
			</Styled.FormContainer>
		</Styled.Root>
	)
}

export default SignupPage
